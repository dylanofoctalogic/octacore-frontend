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

import { AddProjectPayload } from '@octalogic-admin/interfaces';
import { addProjectSchema } from '../schemas';
import { useCreateProjects, useReadClients } from '@octalogic-admin/hooks';
import { PROJECT_STATUSES, queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface CreateProjectModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
}

export function CreateProjectModal(props: CreateProjectModalProps) {
  const { open, setModalStatus } = props;
  const [addMore, setAddMore] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const queryProject = useQueryClient();
  const { mutate: createProject } = useCreateProjects();
  const { data } = useReadClients();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        clientId: 0,
        client: null,
        totalValue: 0,
        totalOutstanding: 0,
        status: 0,
        statusValue: null,
      }}
      validationSchema={addProjectSchema}
      onSubmit={(values: AddProjectPayload, { setSubmitting, resetForm }) => {
        const payload = {
          name: values.name,
          description: values.description,
          clientId: values.client?.id || 0,
          totalValue: values.totalValue,
          totalOutstanding: values.totalOutstanding,
          status: values.statusValue?.id || 0,
        };

        createProject(payload, {
          onSuccess(data) {
            setSubmitting(false);
            enqueueSnackbar(data.message, { variant: 'success' });
            resetForm();
            setTimeout(() => {
              queryProject.invalidateQueries([queryKeys.project.read]);
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
            <DialogTitle>Add Project</DialogTitle>
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
                  name="client"
                  component={Autocomplete}
                  options={data?.data || []}
                  fullWidth
                  getOptionLabel={(option: any) => option.name}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <MuiTextField
                      {...params}
                      // We have to manually set the corresponding fields on the input component
                      name="client"
                      error={touched['client'] && !!errors['client']}
                      helperText={errors['client']}
                      label="Client"
                      variant="outlined"
                    />
                  )}
                />
                <Field
                  component={TextField}
                  name="totalValue"
                  label="Total Value"
                  type="number"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="totalOutstanding"
                  label="Total Outstanding"
                  type="number"
                  fullWidth
                />
                <Field
                  name="statusValue"
                  component={Autocomplete}
                  options={PROJECT_STATUSES || []}
                  fullWidth
                  getOptionLabel={(option: any) => option.name}
                  renderInput={(params: AutocompleteRenderInputParams) => (
                    <MuiTextField
                      {...params}
                      // We have to manually set the corresponding fields on the input component
                      name="statusValue"
                      error={touched['statusValue'] && !!errors['statusValue']}
                      helperText={errors['statusValue']}
                      label="Project Status"
                      variant="outlined"
                    />
                  )}
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
                    Add Project
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

export default CreateProjectModal;
