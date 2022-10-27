import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { useReadCategories } from '@octalogic-admin/hooks';
import { PageHeader } from '@octalogic-admin/components';
import { OctaMaterialTable } from '@octalogic-admin/constants';
import CreateCategoryModal from '../../components/category/create-category-modal/create-category-modal';
import UpdateCategoryModal from '../../components/category/update-category-modal/update-category-modal';
import { Category } from '@octalogic-admin/interfaces';
import DeleteCategoryModal from '../../components/category/delete-category-modal/delete-category-modal';

export function Categories() {
  const { data, isFetching } = useReadCategories();
  
  const [selectedRow, setSelectedRow] = useState<Category | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const handleAddClick = () => {
    setCreateModalOpen(true);
  };

  const handleEditClick = (data: Category) => {
    setSelectedRow(data);
    setUpdateModalOpen(true);
  };

  const handleDeleteClick = (data: Category) => {
    setSelectedRow(data);
    setDeleteModalOpen(true);
  };

  const overflowActions = [
    {
      callback: handleEditClick,
      icon: <EditIcon fontSize="small" />,
      label: 'Edit Category',
    },
    {
      callback: handleDeleteClick,
      icon: <DeleteIcon fontSize="small" />,
      label: 'Delete Category',
    },
  ];

  return (
    <Box>
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
        data={data?.data || []}
        overflowActions={overflowActions}
        setSelectedRow={setSelectedRow}
        selectedRow={selectedRow}
      />
      <CreateCategoryModal
        open={createModalOpen}
        setModalStatus={setCreateModalOpen}
      />
      <UpdateCategoryModal
        open={updateModalOpen}
        setModalStatus={setUpdateModalOpen}
        selectedRow={selectedRow}
      />
      <DeleteCategoryModal
        open={deleteModalOpen}
        setModalStatus={setDeleteModalOpen}
        selectedRow={selectedRow}
      />
    </Box>
  );
}

export default Categories;
