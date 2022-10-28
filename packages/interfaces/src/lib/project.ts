import { Client } from './client';

interface ProjectStatuses {
  id: number;
  name: string;
}

interface Project {
  id?: number;
  name: string;
  description: string;
  clientId: number;
  client?: Client | null;
  totalValue: number;
  totalOutstanding: number;
  status: number;
  statusValue?: ProjectStatuses | null;
}

interface AddProjectPayload {
  name: string;
  description: string;
  clientId: number;
  client?: Client | null;
  totalValue: number;
  totalOutstanding: number;
  status: number;
  statusValue?: ProjectStatuses | null;
}

interface UpdateProjectPayload {
  id: number;
  payload: AddProjectPayload;
}

interface DeleteProjectPayload {
  id: number;
}

export {
  Project,
  AddProjectPayload,
  UpdateProjectPayload,
  DeleteProjectPayload,
  ProjectStatuses,
};
