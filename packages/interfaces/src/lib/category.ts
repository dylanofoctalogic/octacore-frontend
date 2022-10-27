interface Category {
  id?: number;
  name: string;
  description: string;
}

// interface AddCategoryPayload extends Partial<Category>{}
interface AddCategoryPayload {
  name: string;
  description: string;
}

interface UpdateCategoryPayload {
  id: number;
  payload: AddCategoryPayload;
}

interface DeleteCategoryPayload {
  id: number;
}

export {
  Category,
  AddCategoryPayload,
  UpdateCategoryPayload,
  DeleteCategoryPayload,
};
