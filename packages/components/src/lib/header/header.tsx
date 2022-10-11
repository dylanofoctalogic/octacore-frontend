import * as React from 'react';
import { useSnackbar } from 'notistack';
import SVG from 'react-inlinesvg';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  Stack,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import { appRoutes, dashboardRoutes } from '@octalogic-admin/constants';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface HeaderProps {
  handleDrawerToggle: () => void;
  handleAppSidebarToggle: () => void;
}

export function Header(props: HeaderProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);

  const { handleDrawerToggle, handleAppSidebarToggle } = props;

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    enqueueSnackbar('That was easy!', { variant: 'default' });
    const path = `${appRoutes.core}${dashboardRoutes.authentication.login}`;
    window.location.href = path;
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <Link to={dashboardRoutes.authentication.profile}>Profile</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              display: {
                xs: 'block',
                md: 'none',
              },
            }}
            onClick={() => {
              handleDrawerToggle();
            }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <SVG
              src="https://firebasestorage.googleapis.com/v0/b/octacore-37ee5.appspot.com/o/octalogic.svg?alt=media&token=930e123e-a26d-49d5-9f3c-764e630062de"
              width="auto"
              height="3rem"
              title="React"
            />
          </div>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Grid container alignContent="center">
              <Grid item>
                <Stack
                  direction="column"
                  justifyContent="center"
                  className="h-full"
                >
                  <AccountCircle />
                </Stack>
              </Grid>
              <IconButton
                size="large"
                edge="end"
                aria-label="app selection"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => handleAppSidebarToggle()}
                color="inherit"
              >
                <AppsIcon />
              </IconButton>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

// export default Header;
