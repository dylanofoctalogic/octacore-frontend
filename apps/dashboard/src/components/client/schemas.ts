import * as Yup from 'yup';

const addClientSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
  country: Yup.object().nullable().required('Required'),
  city: Yup.string(),
});

const updateClientSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
  country: Yup.object().nullable().required('Required'),
  city: Yup.string(),
});

const deleteClientSchema = Yup.object().shape({
  id: Yup.number().required('Required'),
});

export { addClientSchema, updateClientSchema, deleteClientSchema };
