import * as Yup from 'yup';

const addCategorySchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  description: Yup.string(),
});

const updateCategorySchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
});

const deleteCategorySchema = Yup.object().shape({
  id: Yup.number().required('Required'),
});

export { addCategorySchema, updateCategorySchema, deleteCategorySchema };
