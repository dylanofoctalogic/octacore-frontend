import {
  AutocompleteRenderInputParams,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField as MuiTextField,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useQueryClient } from '@tanstack/react-query';
import { Formik, Form, Field } from 'formik';
import { Autocomplete, TextField } from 'formik-mui';

import { Client, Country } from '@octalogic-admin/interfaces';
import { updateClientSchema } from '../schemas';
import { useReadCountries, useUpdateClients } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface UpdateClientModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Client | null;
}

export function UpdateClientModal(props: UpdateClientModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { mutate: updateClient } = useUpdateClients();
  const { data } = useReadCountries();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: selectedRow?.name || '',
        description: selectedRow?.description || '',
        countryId: selectedRow?.countryId || 0,
        country: selectedRow?.country || null,
        city: selectedRow?.city || '',
      }}
      enableReinitialize
      validationSchema={updateClientSchema}
      onSubmit={(values: Client, { setSubmitting, resetForm }) => {
        const payload = {
          name: values.name,
          description: values.description,
          countryId: values.country?.id || 0,
          city: values.city,
        };
        updateClient(
          { id: selectedRow?.id || 0, payload },
          {
            onSuccess(data) {
              enqueueSnackbar(data.message, { variant: 'success' });
              setSubmitting(false);
              resetForm();
              handleClose();
              setTimeout(() => {
                queryClient.invalidateQueries([queryKeys.client.read]);
              }, 500);
            },
          }
        );
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Update Client</DialogTitle>
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
                  isOptionEqualToValue={(option: Country, value: Country) =>
                    option.id === value.id
                  }
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
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                variant="contained"
              >
                Update Client
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateClientModal;
