import { ValidationError } from 'joi'

export type AuthValidator = {
  validateRegisterForm: (data: any) => { data: any, error?: ValidationError }
}