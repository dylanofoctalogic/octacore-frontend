import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';
import { Formik, Form } from 'formik';

import { Client, DeleteClientPayload } from '@octalogic-admin/interfaces';
import { deleteClientSchema } from '../schemas';
import { useDeleteClients } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface DeleteClientModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Client | null;
}

export function DeleteClientModal(props: DeleteClientModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: deleteClient } = useDeleteClients();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        id: selectedRow?.id || 0,
      }}
      enableReinitialize
      validationSchema={deleteClientSchema}
      onSubmit={(
        values: DeleteClientPayload,
        { setSubmitting, resetForm }
      ) => {
        const payload = { ...values };
        deleteClient(payload, {
          onSuccess(data) {
            enqueueSnackbar(data.message, { variant: 'success' });
            setSubmitting(false);
            resetForm();
            handleClose();
            setTimeout(() => {
              queryClient.invalidateQueries([queryKeys.client.read]);
            }, 500);
          },
        });
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Delete Client "{selectedRow?.name}"?</DialogTitle>
            <DialogContent>
              <DialogContentText>
                This action is non-reversible. Once confirmed the record will
                stop being displayed on the application
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                variant="contained"
              >
                Delete Client
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default DeleteClientModal;
