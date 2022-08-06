import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Customers from './pages/customers/customers';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Landing />
          </DashboardLayout>
        }
      />
      <Route
        path="/customers"
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
