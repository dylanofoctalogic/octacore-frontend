import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Drawer, List, ListSubheader } from '@mui/material';
import {
  dashboardSidebarConfig,
  appSidebarConfig,
  portfolioSidebarConfig,
  supportSidebarConfig,
} from '@octalogic-admin/constants';
import SidebarItem from '../sidebar-item/sidebar-item';

/* eslint-disable-next-line */
export interface SidebarProps {
  mobileSidebarOpen: boolean;
  handleDrawerToggle: () => void;
  sidebarWidth: number;
}

export function Sidebar(props: SidebarProps) {
  const { mobileSidebarOpen, handleDrawerToggle, sidebarWidth } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));

  const origin = window.location.origin;

  const foundApp = appSidebarConfig.find((app) => app.path === origin);

  let sidebarConfig = dashboardSidebarConfig;
  switch (foundApp?.label) {
    case 'Dashboard':
      sidebarConfig = dashboardSidebarConfig;
      break;
    case 'Portfolio':
      sidebarConfig = portfolioSidebarConfig;
      break;
    case 'Support':
      sidebarConfig = supportSidebarConfig;
      break;
    default:
      break;
  }

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <Box>
      <Drawer
        variant={isLarge ? 'permanent' : 'temporary'}
        open={isLarge ? true : mobileSidebarOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {
            xs: isLarge ? 'none' : 'block',
            md: isLarge ? 'block' : 'none',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: sidebarWidth,
          },
        }}
      >
        <List
          subheader={<ListSubheader>{foundApp?.label || ''}</ListSubheader>}
        >
          {sidebarConfig.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
              navigateTo={navigateTo}
            />
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
