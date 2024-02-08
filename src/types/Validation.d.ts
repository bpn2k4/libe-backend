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

export type CollectionValidator = {
  validateCreateCollectionForm: () => {}
}