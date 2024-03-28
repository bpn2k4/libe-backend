import Joi from "joi"

/**@type {import('../types').CollectionValidator} */
export const CollectionValidator = {

  validateCreateCollectionForm: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      color: Joi.string().length(6).hex(),
      description: Joi.string(),
      productIds: Joi.array().items(Joi.number().integer().min(1))
    })
    return schema.validate(data, { abortEarly: false })
  },

  validateGetListCollectionQuery: (data) => {
    const schema = Joi.object({
      page: Joi.number().integer().min(0).default(0),
      limit: Joi.number().integer().min(1).max(999).default(10),
      q: Joi.string().allow(""),
      totalProduct: Joi.boolean().default(false),
      products: Joi.boolean().default(false),
      sortBy: Joi.string(),
      order: Joi.string()
    })
    return schema.validate(data, { abortEarly: false })
  },

  validateDeleteListCollectionBody: (data) => {
    const schema = Joi.object({
      collectionIds: Joi.array().items(Joi.number().integer().min(1)).min(1).required()
    })
    return schema.validate(data, { abortEarly: false })
  },

  validateUpdateCollectionParamsAndBody: (params, body) => {
    const paramsSchema = Joi.object({
      collectionId: Joi.number().integer().min(1).required()
    })
    const bodySchema = Joi.object({
      name: Joi.string(),
      color: Joi.string().length(6).hex(),
      description: Joi.string()
    }).or('name', 'color', 'description').messages({
      'object.missing': 'Body must have at least one field in [name, color, description]'
    })
    const { value: paramsValue, error: paramsError } = paramsSchema.validate(params, { abortEarly: false })
    console.log("paramsValue", paramsValue);
    if (paramsError) return { error: paramsError }
    const { value: bodyValue, error: bodyError } = bodySchema.validate(body, { abortEarly: false })
    if (bodyError) return { error: bodyError }
    return { paramsValue, bodyValue, error: undefined }
  }
}