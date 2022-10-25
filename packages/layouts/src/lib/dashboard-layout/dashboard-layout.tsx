import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, Fab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Header, Sidebar } from '@octalogic-admin/components';

const sidebarWidth = 310;

/* eslint-disable-next-line */
export interface DashboardLayoutProps {
  children: JSX.Element;
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('md'));
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const [appSidebarOpen, setAppSidebarOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
    setAppSidebarOpen(false);
  };

  const handleAppSidebarToggle = () => {
    setAppSidebarOpen(!appSidebarOpen);
    setMobileSidebarOpen(false);
  };

  // appSidebarConfig;

  return (
    <Box>
      <Box
        component="nav"
        sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
        aria-label="navbar"
      >
        <Sidebar
          handleDrawerToggle={handleDrawerToggle}
          mobileSidebarOpen={mobileSidebarOpen}
          sidebarWidth={sidebarWidth}
        />
      </Box>
      <Box
        component="main"
        sx={{
          marginLeft: {
            xs: 0,
            md: `${sidebarWidth}px`,
          },
          paddingBottom: 7,
        }}
      >
        <Box
          sx={{
            padding: {
              xs: 2,
              md: 4,
            },
            paddingTop: {
              xs: 3,
              md: 6,
            },
          }}
        >
          {children}
        </Box>
        <Fab
          variant="extended"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            display: {
              xs: 'block',
              md: 'none',
            },
            backgroundColor: 'secondary.light',
          }}
          onClick={() => handleDrawerToggle()}
        >
          <MenuIcon sx={{ mr: 1 }} />
          Menu
        </Fab>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
