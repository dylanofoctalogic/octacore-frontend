import { Box } from '@mui/material';
import { Header, Sidebar } from '@octalogic-admin/components';

/* eslint-disable-next-line */
export interface DashboardLayoutProps {}

export function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <Box>
      <Header />
      <Sidebar />
      <div className="h-10 w-10 bg-black" />
      <h1>Welcome to DashboardLayout!</h1>
    </Box>
  );
}

export default DashboardLayout;
