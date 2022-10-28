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

import { Technology, DeleteTechnologyPayload } from '@octalogic-admin/interfaces';
import { deleteTechnologySchema } from '../schemas';
import { useDeleteTechnologies } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface DeleteTechnologyModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Technology | null;
}

export function DeleteTechnologyModal(props: DeleteTechnologyModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: deleteTechnology } = useDeleteTechnologies();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        id: selectedRow?.id || 0,
      }}
      enableReinitialize
      validationSchema={deleteTechnologySchema}
      onSubmit={(
        values: DeleteTechnologyPayload,
        { setSubmitting, resetForm }
      ) => {
        const payload = { ...values };
        deleteTechnology(payload, {
          onSuccess(data) {
            enqueueSnackbar(data.message, { variant: 'success' });
            setSubmitting(false);
            resetForm();
            handleClose();
            setTimeout(() => {
              queryClient.invalidateQueries([queryKeys.technology.read]);
            }, 500);
          },
        });
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Delete Technology "{selectedRow?.name}"?</DialogTitle>
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
                Delete Technology
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default DeleteTechnologyModal;
