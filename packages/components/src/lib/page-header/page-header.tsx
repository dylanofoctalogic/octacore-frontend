import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { Box, Breadcrumbs, Link, Typography } from '@mui/material';

import {
  appSidebarConfig,
  getCurrentAppConfig,
} from '@octalogic-admin/constants';

/* eslint-disable-next-line */
export interface PageHeaderProps {
  title: string;
}

export function PageHeader(props: PageHeaderProps) {
  const { title } = props;
  const { pathname } = useLocation();
  console.log("🚀 ~ file: page-header.tsx ~ line 17 ~ PageHeader ~ pathname", pathname)
  const origin = window.location.origin;
  const foundApp = appSidebarConfig.find((app) => app.path === origin);
  const sidebarConfig = getCurrentAppConfig(foundApp?.label || '');
  console.log(
    '🚀 ~ file: page-header.tsx ~ line 20 ~ PageHeader ~ sidebarConfig',
    sidebarConfig
  );

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
        <Typography color="secondary.dark">{foundRoute?.label || "-"}</Typography>
      </Breadcrumbs>
      <Typography variant="h4" sx={{ fontWeight: 500 }}>
        {title}
      </Typography>
    </Box>
  );
}

export default PageHeader;
