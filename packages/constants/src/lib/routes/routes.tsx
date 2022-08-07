import { include } from 'named-urls';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';

const dashboardRoutes = {
  // simple route
  home: '/',

  // route with params
  customers: '/customers',

  // Routes with params
  // messages: include('/messages', {
  //   all: '',
  //   unread: 'unread/',

  //   // nesting of includes is allowed
  //   detail: include(':messageId/', {
  //     show: '',
  //     edit: 'edit/',
  //     comments: 'comments/',
  //   }),
  // }),
};

const dashboardSidebarConfig = [
  {
    path: dashboardRoutes.home,
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    path: dashboardRoutes.customers,
    icon: <GroupIcon />,
    label: 'Customers',
  },
];

const appSidebarConfig = [
  {
    path: process.env['NX_CORE_WEBAPP_URL'],
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    path: process.env['NX_SUPPORT_WEBAPP_URL'],
    icon: <GroupIcon />,
    label: 'Support',
  },
];

export { appSidebarConfig, dashboardRoutes, dashboardSidebarConfig };
