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

import { Category } from '@octalogic-admin/interfaces';
import { updateCategorySchema } from '../schemas';
import { useUpdateCategories } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface UpdateCategoryModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Category | null;
}

export function UpdateCategoryModal(props: UpdateCategoryModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: updateCategory } = useUpdateCategories();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: selectedRow?.name || '',
        description: selectedRow?.description || '',
      }}
      enableReinitialize
      validationSchema={updateCategorySchema}
      onSubmit={(values: Category, { setSubmitting, resetForm }) => {
        const payload = { ...values };
        updateCategory(
          { id: selectedRow?.id || 0, payload },
          {
            onSuccess(data) {
              enqueueSnackbar(data.message, { variant: 'success' });
              setSubmitting(false);
              resetForm();
              handleClose();
              setTimeout(() => {
                queryClient.invalidateQueries([queryKeys.category.read]);
              }, 500);
            },
          }
        );
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Update Category</DialogTitle>
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
              </Stack>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                variant="contained"
              >
                Update Category
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateCategoryModal;
