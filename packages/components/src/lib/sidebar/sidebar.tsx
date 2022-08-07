import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Drawer, List } from '@mui/material';
import { dashboardSidebarConfig } from '@octalogic-admin/constants';
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
        <List>
          {dashboardSidebarConfig.map((item, index) => (
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
