import { include } from 'named-urls';

import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CodeIcon from '@mui/icons-material/Code';
import CategoryIcon from '@mui/icons-material/Category';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const dashboardRoutes = {
  home: '/',
  clients: '/clients',
  categories: '/categories',
  technologies: '/technologies',
  projects: include('/projects', {
    all: '',
    detail: include(':projectId', {
      show: '',
    }),
  }),
};

const dashboardSidebarConfig = [
  {
    path: dashboardRoutes.home,
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    path: dashboardRoutes.categories,
    icon: <CategoryIcon />,
    label: 'Categories',
  },
  {
    path: dashboardRoutes.technologies,
    icon: <CodeIcon />,
    label: 'Technologies',
  },
  {
    path: dashboardRoutes.clients,
    icon: <GroupIcon />,
    label: 'Clients',
  },
  {
    path: dashboardRoutes.projects.all,
    icon: <DevicesIcon />,
    label: 'Projects',
  },
];

const portfolioRoutes = {
  home: '/',
  portfolios: 'portfolios',
};

const portfolioSidebarConfig = [
  {
    path: portfolioRoutes.home,
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    path: portfolioRoutes.portfolios,
    icon: <ImportantDevicesIcon />,
    label: 'Portfolios',
  },
];

const supportRoutes = {
  home: '/',
  tickets: 'tickets',
};

const supportSidebarConfig = [
  {
    path: supportRoutes.home,
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    path: supportRoutes.tickets,
    icon: <SupportAgentIcon />,
    label: 'Tickets',
  },
];

const appSidebarConfig = [
  {
    path: process.env['NX_CORE_WEBAPP_URL'],
    icon: <DashboardIcon />,
    label: 'Dashboard',
  },
  {
    path: process.env['NX_PORTFOLIO_WEBAPP_URL'],
    icon: <ImportantDevicesIcon />,
    label: 'Portfolio',
  },
  {
    path: process.env['NX_SUPPORT_WEBAPP_URL'],
    icon: <GroupIcon />,
    label: 'Support',
  },
];

export {
  appSidebarConfig,
  dashboardRoutes,
  dashboardSidebarConfig,
  portfolioRoutes,
  portfolioSidebarConfig,
  supportRoutes,
  supportSidebarConfig,
};
