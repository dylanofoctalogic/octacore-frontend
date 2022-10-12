import { Link } from 'react-router-dom';
import { Box, Typography, Grid } from '@mui/material';
import { PageHeader } from '@octalogic-admin/components';

export function Landing() {
  return (
    <Box>
      <Grid>
        <PageHeader title="Portfolio Overview" />
      </Grid>
      <Typography>Landing Page</Typography>
      <div>
        This is the generated root route.{' '}
        <Link to="/customers">Click here for customers.</Link>
      </div>
    </Box>
  );
}

export default Landing;
