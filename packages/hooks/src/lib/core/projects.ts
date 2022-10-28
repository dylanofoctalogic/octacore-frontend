import {
  AddProjectPayload,
  DeleteProjectPayload,
  UpdateProjectPayload,
} from '@octalogic-admin/interfaces';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryKeys } from '@octalogic-admin/constants';
import coreInstance from '../axios/coreInstance';

const readProjects = async () => {
  const { data } = await coreInstance({
    method: 'GET',
    url: '/v1/projects',
  });
  return data;
};

export function useReadProjects() {
  return useQuery([queryKeys.project.read], readProjects);
}

async function createProjects(params: AddProjectPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'POST',
    url: '/v1/projects',
    data: params,
  });
  return data;
}

export function useCreateProjects() {
  return useMutation<any, Error, AddProjectPayload>((variables) =>
    createProjects(variables)
  );
}

async function updateProjects(params: UpdateProjectPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'PATCH',
    url: `/v1/projects/${params.id}`,
    data: params.payload,
  });
  return data;
}

export function useUpdateProjects() {
  return useMutation<any, Error, UpdateProjectPayload>((variables) =>
    updateProjects(variables)
  );
}

async function deleteProjects(params: DeleteProjectPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'DELETE',
    url: `/v1/projects/${params.id}`,
  });
  return data;
}

export function useDeleteProjects() {
  return useMutation<any, Error, DeleteProjectPayload>((variables) =>
    deleteProjects(variables)
  );
}
