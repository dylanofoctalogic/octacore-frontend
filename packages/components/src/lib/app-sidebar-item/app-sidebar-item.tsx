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
    <Grid container justifyContent="center" sx={{ paddingY: '0.5rem' }}>
      <IconButton
        aria-label="delete"
        onClick={() => {
          navigateTo(path);
        }}
        size="large"
        sx={{ color: isMatched ? 'primary.dark' : undefined }}
      >
        {icon}
      </IconButton>
      <Typography
        variant="caption"
        sx={{ color: isMatched ? 'primary.dark' : undefined }}
      >
        {label}
      </Typography>
    </Grid>
  );
}

export default AppSidebarItem;
