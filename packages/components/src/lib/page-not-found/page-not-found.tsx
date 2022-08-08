import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { dashboardRoutes } from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface PageNotFoundProps {}

export function PageNotFound(props: PageNotFoundProps) {
  return (
    <Box className="h-full">
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        className="h-full w-full"
      >
        <Grid item>
          <Typography align="center">Page Not Found</Typography>
          <br />
          <Typography color="primary" variant="caption" align="center">
            Go To <Link to={dashboardRoutes.home}>Dashboard</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PageNotFound;
