import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Box, Grid } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { useFetchCategories } from '@octalogic-admin/hooks';
import { PageHeader } from '@octalogic-admin/components';
import { OctaMaterialTable } from '@octalogic-admin/constants';

export function Categories() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useFetchCategories();

  const [selectedRow, setSelectedRow] = useState<Record<string, unknown>>({});

  const handleAddClick = () => {
    // setSelectedAccount(data);
    // setEditModalOpen(true);
  };

  const handleEditClick = (data: object) => {
    console.log(
      '🚀 ~ file: categories.tsx ~ line 13 ~ handleEditClick ~ data',
      data
    );
    // setSelectedAccount(data);
    // setEditModalOpen(true);
  };

  const overflowActions = [
    {
      callback: handleEditClick,
      icon: <EditIcon fontSize="small" />,
      label: 'Edit Category',
    },
  ];

  return (
    <Box>
      ·
      <Grid>
        <PageHeader
          title="Categories"
          actionButton={{ label: 'Category', onClick: handleAddClick }}
        />
      </Grid>
      <OctaMaterialTable
        title="Manage Categories"
        isLoading={isFetching}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Description', field: 'description' },
        ]}
        data={[
          {
            name: 'Donna',
            description: 'Hello there',
          },
        ]}
        overflowActions={overflowActions}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
    </Box>
  );
}

export default Categories;
