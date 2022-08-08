import { Route, Routes } from 'react-router-dom';

import { DashboardLayout, EmptyLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Portfolios from './pages/portfolios/portfolios';
import { portfolioRoutes } from '@octalogic-admin/constants';
import { PageNotFound } from '@octalogic-admin/components';

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
