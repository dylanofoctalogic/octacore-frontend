import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useReadProjects } from '@octalogic-admin/hooks';
import { PageHeader } from '@octalogic-admin/components';
import {
  OctaMaterialTable,
  processProjectStatus,
  PROJECT_STATUSES,
} from '@octalogic-admin/constants';
import CreateProjectModal from '../../components/project/create-project-modal/create-project-modal';
import UpdateProjectModal from '../../components/project/update-project-modal/update-project-modal';
import { Project, ProjectStatuses } from '@octalogic-admin/interfaces';
import DeleteProjectModal from '../../components/project/delete-project-modal/delete-project-modal';

export function Projects() {
  const { data, isFetching } = useReadProjects();

  const [selectedRow, setSelectedRow] = useState<Project | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    setCreateModalOpen(true);
  };

  const handleEditClick = (data: Project) => {
    setSelectedRow(data);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (data: Project) => {
    setSelectedRow(data);
    setDeleteModalOpen(true);
  };

  const overflowActions = [
    {
      callback: handleEditClick,
      icon: <EditIcon fontSize="small" />,
      label: 'Edit Project',
    },
    {
      callback: handleDeleteClick,
      icon: <DeleteIcon fontSize="small" />,
      label: 'Delete Project',
    },
  ];

  return (
    <Box>
      <Grid>
        <PageHeader
          title="Projects"
          actionButton={{ label: 'Project', onClick: handleAddClick }}
        />
      </Grid>
      <OctaMaterialTable
        title="Manage Projects"
        isLoading={isFetching}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Description', field: 'description' },
          { title: 'Client', field: 'client.name' },
          { title: 'Total Value', field: 'totalValue' },
          { title: 'Total Outstanding', field: 'totalOutstanding' },
          {
            title: 'Project Status',
            field: 'status',
            render: (rowData: Project) => {
              return processProjectStatus(rowData.status);
            },
            customFilterAndSearch: (term: string, rowData: Project) => {
              const projectStatus = processProjectStatus(rowData.status);
              return projectStatus.indexOf(term) !== -1;
            },
          },
        ]}
        data={data?.data || []}
        overflowActions={overflowActions}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
      <CreateProjectModal
        open={createModalOpen}
        setModalStatus={setCreateModalOpen}
      />
      <UpdateProjectModal
        open={updateModalOpen}
        setModalStatus={setUpdateModalOpen}
        selectedRow={selectedRow}
      />
      <DeleteProjectModal
        open={deleteModalOpen}
        setModalStatus={setDeleteModalOpen}
        selectedRow={selectedRow}
      />
    </Box>
  );
}

export default Projects;
