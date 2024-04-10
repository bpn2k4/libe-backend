import Joi from 'joi'

const config = {
  abortEarly: false
}

export const AddressValidator = {


  validateCreateProvince: (body) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      type: Joi.string().required()
    })
    return schema.validate(body, config)
  }
}