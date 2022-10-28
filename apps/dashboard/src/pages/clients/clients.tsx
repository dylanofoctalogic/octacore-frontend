import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useReadClients } from '@octalogic-admin/hooks';
import { PageHeader } from '@octalogic-admin/components';
import { OctaMaterialTable } from '@octalogic-admin/constants';
import CreateClientModal from '../../components/client/create-client-modal/create-client-modal';
import UpdateClientModal from '../../components/client/update-client-modal/update-client-modal';
import { Client } from '@octalogic-admin/interfaces';
import DeleteClientModal from '../../components/client/delete-client-modal/delete-client-modal';

export function Clients() {
  const { data, isFetching } = useReadClients();

  const [selectedRow, setSelectedRow] = useState<Client | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    setCreateModalOpen(true);
  };

  const handleEditClick = (data: Client) => {
    setSelectedRow(data);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (data: Client) => {
    setSelectedRow(data);
    setDeleteModalOpen(true);
  };

  const overflowActions = [
    {
      callback: handleEditClick,
      icon: <EditIcon fontSize="small" />,
      label: 'Edit Client',
    },
    {
      callback: handleDeleteClick,
      icon: <DeleteIcon fontSize="small" />,
      label: 'Delete Client',
    },
  ];

  return (
    <Box>
      <Grid>
        <PageHeader
          title="Clients"
          actionButton={{ label: 'Client', onClick: handleAddClick }}
        />
      </Grid>
      <OctaMaterialTable
        title="Manage Clients"
        isLoading={isFetching}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Description', field: 'description' },
          { title: 'Country', field: 'country.nicename' },
          { title: 'City', field: 'city' },
        ]}
        data={data?.data || []}
        overflowActions={overflowActions}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
      <CreateClientModal
        open={createModalOpen}
        setModalStatus={setCreateModalOpen}
      />
      <UpdateClientModal
        open={updateModalOpen}
        setModalStatus={setUpdateModalOpen}
        selectedRow={selectedRow}
      />
      <DeleteClientModal
        open={deleteModalOpen}
        setModalStatus={setDeleteModalOpen}
        selectedRow={selectedRow}
      />
    </Box>
  );
}

export default Clients;
