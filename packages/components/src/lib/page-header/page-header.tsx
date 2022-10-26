import { useLocation } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  Typography,
  Grid,
} from '@mui/material';

import {
  appSidebarConfig,
  getCurrentAppConfig,
} from '@octalogic-admin/constants';

export interface PageHeaderProps {
  title: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export function PageHeader(props: PageHeaderProps) {
  const { title, actionButton } = props;
  const { pathname } = useLocation();
  const origin = window.location.origin;
  const foundApp = appSidebarConfig.find((app) => app.path === origin);
  const sidebarConfig = getCurrentAppConfig(foundApp?.label || '');
  const foundRoute = sidebarConfig.find((route) => route.path === pathname);

  const redirectTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <Box sx={{ marginBottom: '1.5rem' }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href={appSidebarConfig[0].path}>
          Octalogic
        </Link>
        <Link
          underline="hover"
          color="inherit"
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            redirectTo(foundApp?.path || '');
          }}
        >
          {foundApp?.label || '-'}
        </Link>
        <Typography color="secondary.dark">
          {foundRoute?.label || '-'}
        </Typography>
      </Breadcrumbs>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
        </Grid>
        {actionButton ? (
          <Grid item xs={12} md={6} container justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                actionButton.onClick();
              }}
            >
              Add {actionButton.label}
            </Button>
          </Grid>
        ) : (
          ''
        )}
      </Grid>
    </Box>
  );
}

export default PageHeader;
