import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Tickets from './pages/tickets/tickets';
import { supportRoutes } from '@octalogic-admin/constants';

export function Router() {
  return (
    <Routes>
      <Route
        path={supportRoutes.home}
        element={
          <DashboardLayout>
            <Landing />
          </DashboardLayout>
        }
      />
      <Route
        path={supportRoutes.tickets}
        element={
          <DashboardLayout>
            <Tickets />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default Routes;
