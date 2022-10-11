import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar } from '@mui/material';
import { AppSidebar, Header, Sidebar } from '@octalogic-admin/components';

const sidebarWidth = 310;
const appSidebarWidth = 75;

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
      <Header
        handleDrawerToggle={handleDrawerToggle}
        handleAppSidebarToggle={handleAppSidebarToggle}
      />

      <Box
        component="main"
        sx={{
          marginLeft: {
            xs: 0,
            md: `${sidebarWidth}px`,
          },
        }}
      >
        <Toolbar
          sx={{
            display: {
              xs: isLarge ? 'none' : 'block',
            },
          }}
        />
        <Box
          sx={{
            padding: {
              xs: 2,
              md: 4,
            },
            paddingTop: {
              xs: 4,
              md: 6,
            },
          }}
        >
          {children}
        </Box>
      </Box>
      {/* <AppSidebar
        handleAppSidebarToggle={handleAppSidebarToggle}
        appSidebarOpen={appSidebarOpen}
        appSidebarWidth={appSidebarWidth}
      /> */}
    </Box>
  );
}

export default DashboardLayout;
