import { Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@octalogic-admin/layouts';

import Landing from './pages/landing/landing';
import Clients from './pages/clients/clients';
import { dashboardRoutes } from '@octalogic-admin/constants';
import Categories from './pages/categories/categories';
import Technologies from './pages/technologies/technologies';
import Projects from './pages/projects/projects';

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
    </Routes>
  );
}

export default Routes;
