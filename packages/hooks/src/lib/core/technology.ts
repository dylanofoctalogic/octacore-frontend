import {
  AddTechnologyPayload,
  DeleteTechnologyPayload,
  UpdateTechnologyPayload,
} from '@octalogic-admin/interfaces';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryKeys } from '@octalogic-admin/constants';
import coreInstance from '../axios/coreInstance';

const readTechnologies = async () => {
  const { data } = await coreInstance({
    method: 'GET',
    url: '/v1/technologies',
  });
  return data;
};

export function useReadTechnologies() {
  return useQuery([queryKeys.technology.read], readTechnologies);
}

async function createTechnologies(params: AddTechnologyPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'POST',
    url: '/v1/technologies',
    data: params,
  });
  return data;
}

export function useCreateTechnologies() {
  return useMutation<any, Error, AddTechnologyPayload>((variables) =>
    createTechnologies(variables)
  );
}

async function updateTechnologies(params: UpdateTechnologyPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'PATCH',
    url: `/v1/technologies/${params.id}`,
    data: params.payload,
  });
  return data;
}

export function useUpdateTechnologies() {
  return useMutation<any, Error, UpdateTechnologyPayload>((variables) =>
    updateTechnologies(variables)
  );
}

async function deleteTechnologies(params: DeleteTechnologyPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'DELETE',
    url: `/v1/technologies/${params.id}`,
  });
  return data;
}

export function useDeleteTechnologies() {
  return useMutation<any, Error, DeleteTechnologyPayload>((variables) =>
    deleteTechnologies(variables)
  );
}
