interface Technology {
  id?: number;
  name: string;
  description: string;
  resourceLink: string;
}

// interface AddTechnologyPayload extends Partial<Technology>{}
interface AddTechnologyPayload {
  name: string;
  description?: string;
  resourceLink?: string;
}

interface UpdateTechnologyPayload {
  id: number;
  payload: AddTechnologyPayload;
}

interface DeleteTechnologyPayload {
  id: number;
}

export {
  Technology,
  AddTechnologyPayload,
  UpdateTechnologyPayload,
  DeleteTechnologyPayload,
};
