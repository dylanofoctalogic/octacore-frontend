import axios from 'axios';
import { serviceRoutes } from '@octalogic-admin/constants';

const coreInstance = axios.create({
  baseURL: `${serviceRoutes.core}/api`,
});

export default coreInstance;
