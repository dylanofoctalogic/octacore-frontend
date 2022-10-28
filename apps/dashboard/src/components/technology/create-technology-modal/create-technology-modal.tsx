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

import { AddTechnologyPayload } from '@octalogic-admin/interfaces';
import { addTechnologySchema } from '../schemas';
import { useCreateTechnologies } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface CreateTechnologyModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
}

export function CreateTechnologyModal(props: CreateTechnologyModalProps) {
  const { open, setModalStatus } = props;
  const [addMore, setAddMore] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: createTechnology } = useCreateTechnologies();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        resourceLink: '',
      }}
      validationSchema={addTechnologySchema}
      onSubmit={(
        values: AddTechnologyPayload,
        { setSubmitting, resetForm }
      ) => {
        const payload = { ...values };
        createTechnology(payload, {
          onSuccess(data) {
            setSubmitting(false);
            enqueueSnackbar(data.message, { variant: 'success' });
            resetForm();
            setTimeout(() => {
              queryClient.invalidateQueries([queryKeys.technology.read]);
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
            <DialogTitle>Add Technology</DialogTitle>
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
                    Add Technology
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

export default CreateTechnologyModal;
