import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Drawer, Grid, List } from '@mui/material';
import {
  appSidebarConfig,
  getCurrentAppConfig,
} from '@octalogic-admin/constants';
import SidebarItem from '../sidebar-item/sidebar-item';
import AppSidebarItem from '../app-sidebar-item/app-sidebar-item';

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
  const sidebarConfig = getCurrentAppConfig(foundApp?.label || '');

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const redirectTo = (path: string) => {
    window.location.href = path;
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
        elevation={2}
        sx={{
          display: {
            xs: isLarge ? 'none' : 'block',
            md: isLarge ? 'block' : 'none',
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: sidebarWidth,
            top: '1.5rem',
          },
        }}
      >
        <Grid
          container
          sx={{
            height: '100%',
            padding: '0.5rem',
          }}
        >
          <Grid item xs={4}>
            {appSidebarConfig.map((item, index) => (
              <AppSidebarItem
                key={index}
                icon={item.icon}
                label={item.label}
                path={item.path || '#'}
                navigateTo={redirectTo}
              />
            ))}
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ backgroundColor: 'grey.100', padding: '0.25rem' }}
          >
            <List sx={{ paddingTop: '0px' }}>
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
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
