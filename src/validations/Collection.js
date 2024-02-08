import Joi from "joi"


export const CollectionValidator = {
  validateCreateCollectionForm: (data) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      color: Joi.string().length(6).hex(),
      description: Joi.string(),
      productIds: Joi.array().items(Joi.number().integer().min(1))
    })
    return schema.validate(data)
  }
}