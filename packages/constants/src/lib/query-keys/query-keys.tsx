import { createQueryKeyStore } from '@lukemorales/query-key-factory';

export const queryKeys = createQueryKeyStore({
  category: {
    read: null,
  },
  country: {
    read: null,
  },
  client: {
    read: null,
  },
});

