import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export function Customers() {
  return (
    <Box>
      <Typography>Customers Page</Typography>
      <div>
        This is the generated root route.{' '}
        <Link to="/">Click here for landing.</Link>
      </div>
    </Box>
  );
}

export default Customers;
