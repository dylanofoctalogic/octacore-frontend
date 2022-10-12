import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { PageHeader } from '@octalogic-admin/components';

export function Customers() {
  return (
    <Box>
      <Grid>
        <PageHeader title="Portfolios" />
      </Grid>
      <Typography>Customers Page</Typography>
      <div>
        This is the generated root route.{' '}
        <Link to="/">Click here for landing.</Link>
      </div>
    </Box>
  );
}

export default Customers;
