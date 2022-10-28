import { Country } from './country';

interface Client {
  id?: number;
  name: string;
  description: string;
  countryId: number;
  country?: Country | null;
  city: string;
}

interface AddClientPayload {
  name: string;
  description: string;
  countryId: number;
  country?: Country | null;
  city: string;
}

interface UpdateClientPayload {
  id: number;
  payload: AddClientPayload;
}

interface DeleteClientPayload {
  id: number;
}

export { Client, AddClientPayload, UpdateClientPayload, DeleteClientPayload };
