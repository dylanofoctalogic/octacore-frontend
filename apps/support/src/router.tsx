import { Route, Routes } from 'react-router-dom';

import { DashboardLayout, EmptyLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Tickets from './pages/tickets/tickets';
import { supportRoutes } from '@octalogic-admin/constants';
import { PageNotFound } from '@octalogic-admin/components';

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
      <Route
        path="*"
        element={
          <EmptyLayout>
            <PageNotFound />
          </EmptyLayout>
        }
      />
    </Routes>
  );
}

export default Routes;
