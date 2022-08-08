import { Link } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { dashboardRoutes } from '@octalogic-admin/constants';


export function Login() {
  return (
    <Box className="h-full">
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        className="h-full w-full"
      >
        <Grid item>
          <Typography align="center">Login Page</Typography>
          <br />
          <Typography color="primary" variant="caption" align="center">
            Go To <Link to={dashboardRoutes.home}>Dashboard</Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
