import * as Yup from 'yup';

const addProjectSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
  client: Yup.object().nullable().required('Required'),
  totalValue: Yup.number(),
  totalOutstanding: Yup.number(),
  status: Yup.number(),
  statusValue: Yup.object().nullable().required('Required'),
});

const updateProjectSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
  client: Yup.object().nullable().required('Required'),
  totalValue: Yup.number(),
  totalOutstanding: Yup.number(),
  status: Yup.number(),
  statusValue: Yup.object().nullable().required('Required'),
});

const deleteProjectSchema = Yup.object().shape({
  id: Yup.number().required('Required'),
});

export { addProjectSchema, updateProjectSchema, deleteProjectSchema };
