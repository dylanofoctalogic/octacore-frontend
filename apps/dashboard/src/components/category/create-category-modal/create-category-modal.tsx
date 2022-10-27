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
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

import { AddCategoryPayload } from '@octalogic-admin/interfaces';
import { addCategorySchema } from '../schemas';
import { useCreateCategories } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface CreateCategoryModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
}

export function CreateCategoryModal(props: CreateCategoryModalProps) {
  const { open, setModalStatus } = props;
  const [addMore, setAddMore] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: createCategory } = useCreateCategories();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
      }}
      validationSchema={addCategorySchema}
      onSubmit={(values: AddCategoryPayload, { setSubmitting, resetForm }) => {
        const payload = { ...values };
        createCategory(payload, {
          onSuccess(data) {
            setSubmitting(false);
            enqueueSnackbar(data.message, { variant: 'success' });
            resetForm();
            setTimeout(() => {
              queryClient.invalidateQueries([queryKeys.category.read]);
            }, 500);
            if (!addMore) {
              handleClose();
            }
          },
        });
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Category</DialogTitle>
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
              <Grid container justifyContent="space-between">
                <Grid item>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={addMore}
                          onChange={() => setAddMore(!addMore)}
                        />
                      }
                      label="Add more entries?"
                    />
                  </FormGroup>
                </Grid>
                <Grid item>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    disabled={isSubmitting}
                    onClick={submitForm}
                    variant="contained"
                  >
                    Add Category
                  </Button>
                </Grid>
              </Grid>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default CreateCategoryModal;
