import {
  AddCategoryPayload,
  DeleteCategoryPayload,
  UpdateCategoryPayload,
} from '@octalogic-admin/interfaces';
import { useQuery, useMutation } from '@tanstack/react-query';
import { queryKeys } from '@octalogic-admin/constants';
import coreInstance from '../axios/coreInstance';

const readCategories = async () => {
  const { data } = await coreInstance({
    method: 'GET',
    url: '/v1/categories',
  });
  return data;
};

export function useReadCategories() {
  return useQuery([queryKeys.category.read], readCategories);
}

async function createCategories(params: AddCategoryPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'POST',
    url: '/v1/categories',
    data: params,
  });
  return data;
}

export function useCreateCategories() {
  return useMutation<any, Error, AddCategoryPayload>((variables) =>
    createCategories(variables)
  );
}

async function updateCategories(params: UpdateCategoryPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'PATCH',
    url: `/v1/categories/${params.id}`,
    data: params.payload,
  });
  return data;
}

export function useUpdateCategories() {
  return useMutation<any, Error, UpdateCategoryPayload>((variables) =>
    updateCategories(variables)
  );
}

async function deleteCategories(params: DeleteCategoryPayload): Promise<any> {
  const { data } = await coreInstance({
    method: 'DELETE',
    url: `/v1/categories/${params.id}`,
  });
  return data;
}

export function useDeleteCategories() {
  return useMutation<any, Error, DeleteCategoryPayload>((variables) =>
    deleteCategories(variables)
  );
}
