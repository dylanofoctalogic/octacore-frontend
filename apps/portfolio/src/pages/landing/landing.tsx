import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export function Landing() {
  return (
    <Box>
      <Typography>Landing Page</Typography>
      <div>
        This is the generated root route.{' '}
        <Link to="/customers">Click here for customers.</Link>
      </div>
    </Box>
  );
}

export default Landing;
