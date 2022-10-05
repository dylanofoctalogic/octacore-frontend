import { useQueryClient } from '@tanstack/react-query';
import { Box, Typography } from '@mui/material';
import { useFetchCategories } from '@octalogic-admin/hooks';

export function Categories() {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useFetchCategories();
  console.log('🚀 ~ file: categories.tsx ~ line 8 ~ Categories ~ data', data);

  return (
    <Box>
      <Typography>Categories Page</Typography>
    </Box>
  );
}

export default Categories;
