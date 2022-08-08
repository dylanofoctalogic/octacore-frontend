import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Portfolios from './pages/portfolios/portfolios';
import { portfolioRoutes } from '@octalogic-admin/constants';

export function Router() {
  return (
    <Routes>
      <Route
        path={portfolioRoutes.home}
        element={
          <DashboardLayout>
            <Landing />
          </DashboardLayout>
        }
      />
      <Route
        path={portfolioRoutes.portfolios}
        element={
          <DashboardLayout>
            <Portfolios />
          </DashboardLayout>
        }
      />
    </Routes>
  );
}

export default Routes;
