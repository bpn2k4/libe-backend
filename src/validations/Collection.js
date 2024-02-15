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
  }
}