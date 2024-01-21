import { ValidationError } from 'joi'

type RegisterForm = {
  username: String,
  fullName: String,
  email: String,
  password: String
}

export type AuthValidator = {
  validateRegisterForm: (data: any) => { value: RegisterForm, error?: ValidationError }
}