import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  FormGroup,
  Checkbox,
  FormControlLabel,
  DialogContentText,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';
import { Formik, Form } from 'formik';

import { Category, DeleteCategoryPayload } from '@octalogic-admin/interfaces';
import { deleteCategorySchema } from '../schemas';
import { useDeleteCategories } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface DeleteCategoryModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Category | null;
}

export function DeleteCategoryModal(props: DeleteCategoryModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: deleteCategory } = useDeleteCategories();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        id: selectedRow?.id || 0,
      }}
      enableReinitialize
      validationSchema={deleteCategorySchema}
      onSubmit={(
        values: DeleteCategoryPayload,
        { setSubmitting, resetForm }
      ) => {
        const payload = { ...values };
        deleteCategory(payload, {
          onSuccess(data) {
            enqueueSnackbar(data.message, { variant: 'success' });
            setSubmitting(false);
            resetForm();
            handleClose();
            setTimeout(() => {
              queryClient.invalidateQueries([queryKeys.category.read]);
            }, 500);
          },
        });
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Delete Category "{selectedRow?.name}"?</DialogTitle>
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
                Delete Category
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default DeleteCategoryModal;
