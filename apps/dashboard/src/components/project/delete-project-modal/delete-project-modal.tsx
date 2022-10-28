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

import { Project, DeleteProjectPayload } from '@octalogic-admin/interfaces';
import { deleteProjectSchema } from '../schemas';
import { useDeleteProjects } from '@octalogic-admin/hooks';
import { queryKeys } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface DeleteProjectModalProps {
  open: boolean;
  setModalStatus: (status: boolean) => void;
  selectedRow: Project | null;
}

export function DeleteProjectModal(props: DeleteProjectModalProps) {
  const { open, setModalStatus, selectedRow } = props;
  const { enqueueSnackbar } = useSnackbar();
  const queryProject = useQueryClient();
  const { mutate: deleteProject } = useDeleteProjects();

  const handleClose = () => {
    setModalStatus(false);
  };

  return (
    <Formik
      initialValues={{
        id: selectedRow?.id || 0,
      }}
      enableReinitialize
      validationSchema={deleteProjectSchema}
      onSubmit={(values: DeleteProjectPayload, { setSubmitting, resetForm }) => {
        const payload = { ...values };
        deleteProject(payload, {
          onSuccess(data) {
            enqueueSnackbar(data.message, { variant: 'success' });
            setSubmitting(false);
            resetForm();
            handleClose();
            setTimeout(() => {
              queryProject.invalidateQueries([queryKeys.project.read]);
            }, 500);
          },
        });
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Delete Project "{selectedRow?.name}"?</DialogTitle>
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
                Delete Project
              </Button>
            </DialogActions>
          </Dialog>
        </Form>
      )}
    </Formik>
  );
}

export default DeleteProjectModal;
