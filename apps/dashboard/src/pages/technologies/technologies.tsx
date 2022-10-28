import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useReadTechnologies } from '@octalogic-admin/hooks';
import { PageHeader } from '@octalogic-admin/components';
import { OctaMaterialTable } from '@octalogic-admin/constants';
import CreateTechnologyModal from '../../components/technology/create-technology-modal/create-technology-modal';
import UpdateTechnologyModal from '../../components/technology/update-technology-modal/update-technology-modal';
import { Technology } from '@octalogic-admin/interfaces';
import DeleteTechnologyModal from '../../components/technology/delete-technology-modal/delete-technology-modal';

export function Technologies() {
  const { data, isFetching } = useReadTechnologies();

  const [selectedRow, setSelectedRow] = useState<Technology | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    setCreateModalOpen(true);
  };

  const handleEditClick = (data: Technology) => {
    setSelectedRow(data);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (data: Technology) => {
    setSelectedRow(data);
    setDeleteModalOpen(true);
  };

  const overflowActions = [
    {
      callback: handleEditClick,
      icon: <EditIcon fontSize="small" />,
      label: 'Edit Technology',
    },
    {
      callback: handleDeleteClick,
      icon: <DeleteIcon fontSize="small" />,
      label: 'Delete Technology',
    },
  ];

  return (
    <Box>
      <Grid>
        <PageHeader
          title="Technologies"
          actionButton={{ label: 'Technology', onClick: handleAddClick }}
        />
      </Grid>
      <OctaMaterialTable
        title="Manage Technologies"
        isLoading={isFetching}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Description', field: 'description' },
          {
            title: 'Resource Link',
            field: 'resourceLink',
            render: (rowData: Technology) => (
              <a target="_blank" rel="noreferrer" href={rowData.resourceLink}>
                {rowData.resourceLink}
              </a>
            ),
          },
        ]}
        data={data?.data || []}
        overflowActions={overflowActions}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
      <CreateTechnologyModal
        open={createModalOpen}
        setModalStatus={setCreateModalOpen}
      />
      <UpdateTechnologyModal
        open={updateModalOpen}
        setModalStatus={setUpdateModalOpen}
        selectedRow={selectedRow}
      />
      <DeleteTechnologyModal
        open={deleteModalOpen}
        setModalStatus={setDeleteModalOpen}
        selectedRow={selectedRow}
      />
    </Box>
  );
}

export default Technologies;
