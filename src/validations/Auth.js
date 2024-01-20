import Joi from 'joi'
import { USER } from '../schemas/index.js'
import { GENDER } from '../constants/index.js'

const options = { abortEarly: false }

/**@type {import('.').AuthValidator} */
export const AuthValidator = {

  validateRegisterForm: (body) => {
    const schema = Joi.object({
      fullName: Joi.string().max(USER.fullName.MAX).required(),
      username: Joi.string()
        .min(USER.username.MIN)
        .max(USER.username.MAX)
        .pattern(USER.username.PATTERN)
        .required(),
      password: Joi.string()
        .min(USER.password.MIN)
        .max(USER.password.MAX)
        .pattern(USER.password.PATTERN)
        .required(),
      phone: Joi.string()
        .length(USER.phone.MIN)
        .pattern(USER.phone.PATTERN),
      email: Joi.string()
        .email(),
      birthday: Joi.string()
        .pattern(USER.birthday.PATTERN),
      gender: Joi.string()
        .valid(GENDER.FEMALE, GENDER.MALE, GENDER.OTHER, GENDER.UNSET)
    })
    return schema.validate(body, options)
  }

}