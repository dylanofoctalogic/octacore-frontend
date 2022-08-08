import { Route, Routes } from 'react-router-dom';

import { DashboardLayout, EmptyLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Clients from './pages/clients/clients';
import { dashboardRoutes } from '@octalogic-admin/constants';
import Categories from './pages/categories/categories';
import Technologies from './pages/technologies/technologies';
import Projects from './pages/projects/projects';
import Login from './pages/login/login';
import { PageNotFound } from '@octalogic-admin/components';

export function Router() {
  return (
    <Routes>
      <Route
        path={dashboardRoutes.authentication.login}
        element={
          <EmptyLayout>
            <Login />
          </EmptyLayout>
        }
      />
      <Route
        path={dashboardRoutes.home}
        element={
          <DashboardLayout>
            <Landing />
          </DashboardLayout>
        }
      />
      <Route
        path={dashboardRoutes.categories}
        element={
          <DashboardLayout>
            <Categories />
          </DashboardLayout>
        }
      />
      <Route
        path={dashboardRoutes.technologies}
        element={
          <DashboardLayout>
            <Technologies />
          </DashboardLayout>
        }
      />
      <Route
        path={dashboardRoutes.clients}
        element={
          <DashboardLayout>
            <Clients />
          </DashboardLayout>
        }
      />
      <Route
        path={dashboardRoutes.projects.all}
        element={
          <DashboardLayout>
            <Projects />
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
