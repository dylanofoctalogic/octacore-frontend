import * as Yup from 'yup';

const addTechnologySchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  description: Yup.string(),
});

const updateTechnologySchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
});

const deleteTechnologySchema = Yup.object().shape({
  id: Yup.number().required('Required'),
});

export { addTechnologySchema, updateTechnologySchema, deleteTechnologySchema };
