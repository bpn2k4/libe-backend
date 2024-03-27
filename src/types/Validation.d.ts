import { ValidationError } from 'joi'

type RegisterForm = {
  username: String,
  fullName: String,
  email: String,
  password: String
}

type LoginForm = {
  username: String,
  password: String
}

export type AuthValidator = {
  validateRegisterForm: (data: any) => { value: RegisterForm, error?: ValidationError },
  validateLoginForm: (data: any) => { value: LoginForm, error?: ValidationError },
}

type CreateCollectionForm = {
  name: String,
  description: String,
  hex: String,
  productIds: Number[],
}

type GetListCollectionQuery = {
  page: Number,
  limit: Number,
  q: String,
  totalProduct: Boolean,
  products: Boolean,
  sortBy: String,
  order: String
}

type DeleteListCollectionBody = {
  collectionIds: number[]
}
export type CollectionValidator = {
  validateCreateCollectionForm: (data: any) => { value: CreateCollectionForm, error?: ValidationError }
  validateGetListCollectionQuery: (data: any) => { value: GetListCollectionQuery, error?: ValidationError },
  validateDeleteListCollectionBody: (data: any) => { value: DeleteListCollectionBody, error?: ValidationError },
}