import Drawer from '@mui/material/Drawer';

/* eslint-disable-next-line */
export interface AppSidebarProps {
  appSidebarOpen: boolean;
  handleAppSidebarToggle: () => void;
  appSidebarWidth: number;
}

export function AppSidebar(props: AppSidebarProps) {
  const { appSidebarOpen, handleAppSidebarToggle, appSidebarWidth } = props;
  return (
    <Drawer
      variant="temporary"
      open={appSidebarOpen}
      onClose={handleAppSidebarToggle}
      anchor="right"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: 'block',
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: appSidebarWidth,
        },
      }}
    ></Drawer>
  );
}

export default AppSidebar;
