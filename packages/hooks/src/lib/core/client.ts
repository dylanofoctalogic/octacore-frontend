import {
  AddClientPayload,
  DeleteClientPayload,
  UpdateClientPayload,
} from '@octalogic-admin/interfaces';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryKeys } from '@octalogic-admin/constants';
import coreInstance from '../axios/coreInstance';

const readClients = async () => {
  const { data } = await coreInstance({
    method: 'GET',
    url: '/v1/clients',
  });
  return data;
};

export function useReadClients() {
  return useQuery([queryKeys.client.read], readClients);
}

async function createClients(params: AddClientPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'POST',
    url: '/v1/clients',
    data: params,
  });
  return data;
}

export function useCreateClients() {
  return useMutation<any, Error, AddClientPayload>((variables) =>
    createClients(variables)
  );
}

async function updateClients(params: UpdateClientPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'PATCH',
    url: `/v1/clients/${params.id}`,
    data: params.payload,
  });
  return data;
}

export function useUpdateClients() {
  return useMutation<any, Error, UpdateClientPayload>((variables) =>
    updateClients(variables)
  );
}

async function deleteClients(params: DeleteClientPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'DELETE',
    url: `/v1/clients/${params.id}`,
  });
  return data;
}

export function useDeleteClients() {
  return useMutation<any, Error, DeleteClientPayload>((variables) =>
    deleteClients(variables)
  );
}
