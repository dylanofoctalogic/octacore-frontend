import { useQuery } from '@tanstack/react-query';

import coreInstance from '../axios/coreInstance';

const getCategories = async () => {
  const { data } = await coreInstance.get(
    '/v1/categories'
  );
  return data;
};

export function useFetchCategories() {
  return useQuery(['categories'], getCategories);
}

export default useFetchCategories;
