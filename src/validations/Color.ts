import Joi from 'joi'

import { validateOption } from './Common'
import { ValidationParams, ValidationError } from '@types'

type ValidateCreateColor = (data: ValidationParams) => ({
  body: {
    name: string,
    hex: string
  },
  error?: ValidationError
})

export const validateCreateColor: ValidateCreateColor = ({ body }) => {
  const bodySchema = Joi.object({
    name: Joi.string().required(),
    hex: Joi.string().hex().length(6).required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}

type ValidateGetColors = (data: ValidationParams) => ({
  query: {
    page: number,
    limit: number,
    q?: string,
    timestamp: boolean
  },
  error?: ValidationError
})

export const validateGetColors: ValidateGetColors = ({ query }) => {
  const querySchema = Joi.object({
    page: Joi.number().integer().min(0).default(0),
    limit: Joi.number().integer().min(1).max(255).default(10),
    q: Joi.string(),
    timestamps: Joi.boolean().default(false)
  })
  const { value: queryValue, error: queryError } = querySchema.validate(query, validateOption)
  return { query: queryValue, error: queryError }
}

type ValidateUpdateColor = (data: ValidationParams) => ({
  params: {
    colorId: string
  }
  body: {
    name?: string,
    hex?: string
  },
  error?: ValidationError
})

export const validateUpdateColor: ValidateUpdateColor = ({ params, body }) => {
  const paramsSchema = Joi.object({
    colorId: Joi.string().required()
  })
  const bodySchema = Joi.object({
    name: Joi.string(),
    hex: Joi.string().hex().length(6)
  }).or('name', 'hex')
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, validateOption)
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { params: paramsValue, body: bodyValue, error: paramsError ?? bodyError }
}

type ValidateGetColor = (data: ValidationParams) => ({
  params: {
    colorId: string
  },
  query: {
    timestamp: boolean
  },
  error?: ValidationError
})

export const validateGetColor: ValidateGetColor = ({ params, query }) => {
  const paramsSchema = Joi.object({
    colorId: Joi.string().required()
  })
  const querySchema = Joi.object({
    timestamp: Joi.boolean().default(false)
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, validateOption)
  const { value: queryValue, error: queryError } = querySchema.validate(query, validateOption)
  return { params: paramsValue, query: queryValue, error: paramsError ?? queryError }
}

type ValidateDeleteColor = (data: ValidationParams) => ({
  params: {
    colorId: string
  },
  error?: ValidationError
})

export const validateDeleteColor: ValidateDeleteColor = ({ params }) => {
  const paramsSchema = Joi.object({
    colorId: Joi.string().required()
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, validateOption)
  return { params: paramsValue, error: paramsError }
}

type ValidateDeleteColors = (data: ValidationParams) => ({
  body: {
    colorIds: number[]
  },
  error?: ValidationError
})

export const validateDeleteColors: ValidateDeleteColors = ({ body }) => {
  const bodySchema = Joi.object({
    colorIds: Joi.array().items(Joi.number().integer()).min(1).required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}


