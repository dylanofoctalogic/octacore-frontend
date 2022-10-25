import { useQueryClient } from '@tanstack/react-query';
import { Box, Grid } from '@mui/material';
import MaterialTable from '@material-table/core';
import { useFetchCategories } from '@octalogic-admin/hooks';
import { PageHeader } from '@octalogic-admin/components';

export function Categories() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useFetchCategories();

  return (
    <Box>
      <Grid>
        <PageHeader title="Categories" />
      </Grid>
      <MaterialTable
        title="Manage Categories"
        options={{
          pageSize: 10,
          pageSizeOptions: [10, 15, 25],
        }}
        columns={[
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ]}
        data={[
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          { name: 'Bill', surname: 'Ryan', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event: any, rowData: any) =>
              alert('You saved ' + rowData.name),
          },
        ]}
      />
    </Box>
  );
}

export default Categories;
