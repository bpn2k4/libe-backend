import Joi from 'joi'

import { validateOption } from './Common'
import { ValidationParams, ValidationError } from '@types'
import { DISTRICT_TYPE, PROVINCE_TYPE, WARD_TYPE } from '@configs'


export const validateCreateProvince: ValidateCreateProvince = ({ body }) => {
  const bodySchema = Joi.object({
    name: Joi.string().required(),
    type: Joi.string().valid(PROVINCE_TYPE.CITY, PROVINCE_TYPE.PROVINCE).required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}

export const validateGetProvinces: ValidateGetProvinces = ({ query }) => {
  const querySchema = Joi.object({
    page: Joi.number().integer().default(0),
    limit: Joi.number().integer().min(0).max(250).default(20),
    timestamp: Joi.boolean().default(false),
    q: Joi.string(),
    type: Joi.string().valid(PROVINCE_TYPE.CITY, PROVINCE_TYPE.PROVINCE)
  })
  const { value: queryValue, error: queryError } = querySchema.validate(query, validateOption)
  return { query: queryValue, error: queryError }
}
export const validateGetProvince: ValidateGetProvince = ({ params, query }) => {
  const paramsSchema = Joi.object({
    provinceId: Joi.number().required()
  })
  const querySchema = Joi.object({
    timestamp: Joi.boolean().default(false)
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, validateOption)
  const { value: queryValue, error: queryError } = querySchema.validate(query, validateOption)
  return { params: paramsValue, query: queryValue, error: paramsError ?? queryError }
}

export const validateUpdateProvince: ValidateUpdateProvince = ({ body }) => {
  const bodySchema = Joi.object({
    name: Joi.string(),
    type: Joi.string().valid(PROVINCE_TYPE.CITY, PROVINCE_TYPE.PROVINCE)
  }).or('name', 'type')
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}

export const validateGetDistrictsInProvince: ValidateGetDistrictsInProvince = ({ params, query }) => {
  const paramsSchema = Joi.object({
    provinceId: Joi.number().required()
  })
  const querySchema = Joi.object({
    page: Joi.number().integer().default(0),
    limit: Joi.number().integer().min(0).max(250).default(20),
    timestamp: Joi.boolean().default(false),
    provinceId: Joi.boolean().default(false),
    q: Joi.string(),
    type: Joi.string()
      .valid(
        DISTRICT_TYPE.CITY,
        DISTRICT_TYPE.DISTRICT,
        DISTRICT_TYPE.TOWN,
        DISTRICT_TYPE.URBAN_DISTRICT
      )
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, validateOption)
  const { value: queryValue, error: queryError } = querySchema.validate(query, validateOption)
  return { query: queryValue, params: paramsValue, error: paramsError ?? queryError }
}

export const validateCreateDistrict: ValidateCreateDistrict = ({ body }) => {
  const bodySchema = Joi.object({
    provinceId: Joi.number().required(),
    name: Joi.string().required(),
    type: Joi.string()
      .valid(
        DISTRICT_TYPE.CITY,
        DISTRICT_TYPE.DISTRICT,
        DISTRICT_TYPE.TOWN,
        DISTRICT_TYPE.URBAN_DISTRICT
      ).required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}

export const validateCreateWard: ValidateCreateWard = ({ body }) => {
  const bodySchema = Joi.object({
    districtId: Joi.number().required(),
    name: Joi.string().required(),
    type: Joi.string()
      .valid(
        WARD_TYPE.COMMUNE,
        WARD_TYPE.TOWNSHIP,
        WARD_TYPE.WARD
      ).required()
  })
  const { value: bodyValue, error: bodyError } = bodySchema.validate(body, validateOption)
  return { body: bodyValue, error: bodyError }
}

export const validateGetWardsInDistrict: ValidateGetWardsInDistrict = ({ params, query }) => {
  const paramsSchema = Joi.object({
    districtId: Joi.number().required()
  })
  const querySchema = Joi.object({
    page: Joi.number().integer().default(0),
    limit: Joi.number().integer().min(0).max(250).default(20),
    timestamp: Joi.boolean().default(false),
    districtId: Joi.boolean().default(false),
    q: Joi.string(),
    type: Joi.string()
      .valid(
        WARD_TYPE.COMMUNE,
        WARD_TYPE.TOWNSHIP,
        WARD_TYPE.WARD
      )
  })
  const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, validateOption)
  const { value: queryValue, error: queryError } = querySchema.validate(query, validateOption)
  return { query: queryValue, params: paramsValue, error: paramsError ?? queryError }
}

type ValidateCreateProvince = (data: ValidationParams) => ({
  body: {
    name: string,
    type: string
  },
  error?: ValidationError
})
type ValidateGetProvinces = (data: ValidationParams) => ({
  query: {
    page: number,
    limit: number,
    timestamp: boolean,
    q?: string,
    type?: string
  },
  error?: ValidationError
})
type ValidateGetProvince = (data: ValidationParams) => ({
  params: {
    provinceId: number,
  },
  query: {
    timestamp: boolean,
  }
  error?: ValidationError
})
type ValidateUpdateProvince = (data: ValidationParams) => ({
  body: {
    name?: string,
    type?: string
  },
  error?: ValidationError
})
type ValidateGetDistrictsInProvince = (data: ValidationParams) => ({
  params: {
    provinceId: number,
  },
  query: {
    page: number,
    limit: number,
    timestamp: boolean,
    provinceId: boolean,
    q?: string,
    type?: string
  },
  error?: ValidationError
})
type ValidateCreateDistrict = (data: ValidationParams) => ({
  body: {
    provinceId: number,
    name: string,
    type: string
  },
  error?: ValidationError
})
type ValidateCreateWard = (data: ValidationParams) => ({
  body: {
    districtId: number,
    name: string,
    type: string
  },
  error?: ValidationError
})
type ValidateGetWardsInDistrict = (data: ValidationParams) => ({
  params: {
    districtId: number,
  },
  query: {
    page: number,
    limit: number,
    timestamp: boolean,
    districtId: boolean,
    q?: string,
    type?: string
  },
  error?: ValidationError
})

