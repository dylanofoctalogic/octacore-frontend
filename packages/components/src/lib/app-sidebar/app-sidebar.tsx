import Drawer from '@mui/material/Drawer';
import { appSidebarConfig } from '@octalogic-admin/constants';
import AppSidebarItem from '../app-sidebar-item/app-sidebar-item';

/* eslint-disable-next-line */
export interface AppSidebarProps {
  appSidebarOpen: boolean;
  handleAppSidebarToggle: () => void;
  appSidebarWidth: number;
}

export function AppSidebar(props: AppSidebarProps) {
  const { appSidebarOpen, handleAppSidebarToggle, appSidebarWidth } = props;

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

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
    >
      {appSidebarConfig.map((item, index) => (
        <AppSidebarItem
          key={index}
          icon={item.icon}
          label={item.label}
          path={item.path || '#'}
          navigateTo={navigateTo}
        />
      ))}
    </Drawer>
  );
}

export default AppSidebar;
