import Joi from 'joi'

import { validateOption } from './Common'
import { ValidationParams, ValidationError } from '@types'

type ValidateCreateCollection = (data: ValidationParams) => ({
  body: {
    name: string,
    description: string,
    colorIds: number[],
    productIds: number[],
  }
})

export const validateCreateCollection: ValidateCreateCollection = ({ body }) => {
  const bodySchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    colorIds: Joi.array().items(Joi.number().integer()).default([]),
    productIds: Joi.array().items(Joi.number().integer()).default([]),
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}