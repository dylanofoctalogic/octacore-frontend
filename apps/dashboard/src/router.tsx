import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Customers from './pages/customers/customers';
import { dashboardRoutes } from '@octalogic-admin/constants';

export function Router() {
  return (
    <Routes>
      <Route
        path={dashboardRoutes.home}
        element={
          <DashboardLayout>
            <Landing />
          </DashboardLayout>
        }
      />
      <Route
        path={dashboardRoutes.customers}
        element={
          <DashboardLayout>
            <Customers />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default Routes;
