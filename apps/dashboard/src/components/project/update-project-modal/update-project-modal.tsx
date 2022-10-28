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

import { Project, Country } from '@octalogic-admin/interfaces';
import { updateProjectSchema } from '../schemas';
import { useReadClients, useUpdateProjects } from '@octalogic-admin/hooks';
import { queryKeys, PROJECT_STATUSES } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface UpdateProjectModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Project | null;
}

export function UpdateProjectModal(props: UpdateProjectModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryProject = useQueryClient();
  const { mutate: updateProject } = useUpdateProjects();
  const { data } = useReadClients();

  const handleClose = () => {
    setModalStatus(false);
  };

  const foundStatus = PROJECT_STATUSES.find(
    (status) => status.id === selectedRow?.status
  );

  return (
    <Formik
      initialValues={{
        name: selectedRow?.name || '',
        description: selectedRow?.description || '',
        clientId: selectedRow?.clientId || 0,
        client: selectedRow?.client || null,
        totalValue: selectedRow?.totalValue || 0,
        totalOutstanding: selectedRow?.totalOutstanding || 0,
        status: selectedRow?.status || 1,
        statusValue: foundStatus || null,
      }}
      enableReinitialize
      validationSchema={updateProjectSchema}
      onSubmit={(values: Project, { setSubmitting, resetForm }) => {
        const payload = {
          name: values.name,
          description: values.description,
          clientId: values.client?.id || 0,
          totalValue: values.totalValue,
          totalOutstanding: values.totalOutstanding,
          status: values.statusValue?.id || 0,
        };
        updateProject(
          { id: selectedRow?.id || 0, payload },
          {
            onSuccess(data) {
              enqueueSnackbar(data.message, { variant: 'success' });
              setSubmitting(false);
              resetForm();
              handleClose();
              setTimeout(() => {
                queryProject.invalidateQueries([queryKeys.project.read]);
              }, 500);
            },
          }
        );
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Update Project</DialogTitle>
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
                  isOptionEqualToValue={(option: Country, value: Country) =>
                    option.id === value.id
                  }
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
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                disabled={isSubmitting}
                onClick={submitForm}
                variant="contained"
              >
                Update Project
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default UpdateProjectModal;
