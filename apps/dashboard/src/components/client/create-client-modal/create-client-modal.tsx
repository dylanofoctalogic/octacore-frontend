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
  AutocompleteRenderInputParams,
  TextField as MuiTextField,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';
import { Formik, Form, Field } from 'formik';
import { TextField, Autocomplete } from 'formik-mui';

import { AddClientPayload } from '@octalogic-admin/interfaces';
import { addClientSchema } from '../schemas';
import { useCreateClients, useReadCountries } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface CreateClientModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
}

export function CreateClientModal(props: CreateClientModalProps) {
  const { open, setModalStatus } = props;
  const [addMore, setAddMore] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: createClient } = useCreateClients();
  const { data } = useReadCountries();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        countryId: 0,
        country: null,
        city: '',
      }}
      validationSchema={addClientSchema}
      onSubmit={(values: AddClientPayload, { setSubmitting, resetForm }) => {
        const payload = {
          name: values.name,
          description: values.description,
          countryId: values.country?.id || 0,
          city: values.city,
        };

        createClient(payload, {
          onSuccess(data) {
            setSubmitting(false);
            enqueueSnackbar(data.message, { variant: 'success' });
            resetForm();
            setTimeout(() => {
              queryClient.invalidateQueries([queryKeys.client.read]);
            }, 500);
            if (!addMore) {
              handleClose();
            }
          },
        });
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Add Client</DialogTitle>
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
                  name="country"
                  component={Autocomplete}
                  options={data?.data || []}
                  fullWidth
                  getOptionLabel={(option: any) => option.nicename}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <MuiTextField
                      {...params}
                      // We have to manually set the corresponding fields on the input component
                      name="country"
                      error={touched['country'] && !!errors['country']}
                      helperText={errors['country']}
                      label="Country"
                      variant="outlined"
                    />
                  )}
                />
                <Field
                  component={TextField}
                  name="city"
                  label="City"
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
                    Add Client
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

export default CreateClientModal;
