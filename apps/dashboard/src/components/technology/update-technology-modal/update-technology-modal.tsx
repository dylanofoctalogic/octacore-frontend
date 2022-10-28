import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import { Technology } from '@octalogic-admin/interfaces';
import { updateTechnologySchema } from '../schemas';
import { useUpdateTechnologies } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface UpdateTechnologyModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Technology | null;
}

export function UpdateTechnologyModal(props: UpdateTechnologyModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: updateTechnology } = useUpdateTechnologies();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: selectedRow?.name || '',
        description: selectedRow?.description || '',
        resourceLink: selectedRow?.resourceLink || '',
      }}
      enableReinitialize
      validationSchema={updateTechnologySchema}
      onSubmit={(values: Technology, { setSubmitting, resetForm }) => {
        const payload = { ...values };
        updateTechnology(
          { id: selectedRow?.id || 0, payload },
          {
            onSuccess(data) {
              enqueueSnackbar(data.message, { variant: 'success' });
              setSubmitting(false);
              resetForm();
              handleClose();
              setTimeout(() => {
                queryClient.invalidateQueries([queryKeys.technology.read]);
              }, 500);
            },
          }
        );
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Update Technology</DialogTitle>
            <DialogContent>
              <Stack mt={2} spacing={2}>
                <Field
                  component={TextField}
                  name="name"
                  label="Name"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="description"
                  label="Description"
                  fullWidth
                  multiline
                />
                <Field
                  component={TextField}
                  name="resourceLink"
                  label="Resource Link"
                  fullWidth
                />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                variant="contained"
              >
                Update Technology
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateTechnologyModal;
