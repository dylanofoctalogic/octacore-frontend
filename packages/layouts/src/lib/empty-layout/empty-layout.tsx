import { Box, Grid } from '@mui/material';

/* eslint-disable-next-line */
export interface EmptyLayoutProps {
  children: JSX.Element;
}

export function EmptyLayout(props: EmptyLayoutProps) {
  const { children } = props;
  return (
    <Box className="h-full">
      <Grid
        container
        justifyContent="center"
        alignContent="center"
        className="h-full w-full"
      >
        <Grid item>{children}</Grid>
      </Grid>
    </Box>
  );
}

export default EmptyLayout;
