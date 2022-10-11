import { ReactNode } from 'react';
import { IconButton, Grid, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface AppSidebarItemProps {
  icon: ReactNode;
  label: string;
  path: string;
  navigateTo: (path: string) => void;
}

export function AppSidebarItem(props: AppSidebarItemProps) {
  const { icon, label, path, navigateTo } = props;

  const origin = window.location.origin;

  const isMatched = path === origin;

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        padding: '0.5rem',
        backgroundColor: isMatched ? 'grey.200' : undefined,
      }}
    >
      <IconButton
        aria-label="delete"
        onClick={() => {
          navigateTo(path);
        }}
        size="large"
      >
        {icon}
      </IconButton>
      <Typography variant="caption">{label}</Typography>
    </Grid>
  );
}

export default AppSidebarItem;
