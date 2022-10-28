import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@octalogic-admin/constants';
import coreInstance from '../axios/coreInstance';

const readCountries = async () => {
  const { data } = await coreInstance({
    method: 'GET',
    url: '/v1/countries',
  });
  return data;
};

export function useReadCountries() {
  return useQuery([queryKeys.country.read], readCountries);
}
