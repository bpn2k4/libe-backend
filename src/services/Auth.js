import { ERROR_MESSAGES, JWT_MESSAGES, STATUS_CODES } from '../constants/index.js'
import { AuthenticationError, ResourceExistedError, ValidationError } from '../errors/index.js'
import { User } from '../models/index.js'
import { Op } from '../databases/index.js'
import { AuthValidator } from '../validations/Auth.js'
import { JWTService } from './JWT.js'
import Joi from 'joi'

/**@type {import('../types').HandlerService} */
const register = async ({ body, files = [] }) => {
  const avatar = files[0] ? files[0].path.split('\\').join('/') : undefined
  const { value, error } = AuthValidator.validateRegisterForm(body)
  if (error) throw ValidationError(error)
  if (value.username) {
    const user = await User.findOne({
      where: { username: value.username },
      paranoid: true
    })
    if (user) throw new ResourceExistedError({ message: `Username "${value.username}" has been existed` })
  }
  if (value.phone) {
    const user = await User.findOne({
      where: { phone: value.phone },
      paranoid: true
    })
    if (user) throw new ResourceExistedError({ message: `Phone "${value.phone}" has been existed` })
  }
  if (value.email) {
    const user = await User.findOne({
      where: { email: value.email },
      paranoid: true
    })
    if (user) throw new ResourceExistedError({ message: `Email "${value.email}" has been existed` })
  }
  const user_ = await User.create({
    ...value,
    avatar
  })
  const user = user_.toJSON()
  delete user.password
  const payload = { userId: user.userId }
  user.accessToken = JWTService.generateAccessToken(payload)
  user.refreshToken = JWTService.generateRefreshToken(payload)
  return {
    user: user
  }
}

/**@type {import('../types').HandlerService} */
const login = async ({ body }) => {
  const { value, error } = AuthValidator.validateLoginForm(body)
  if (error) throw error
  const existed = await User.findOne({
    where: {
      [Op.or]: [
        { username: value.username },
        { phone: value.username },
        { email: value.username },
      ]
    },
    paranoid: true
  })
  if (!existed) throw new AuthenticationError({
    error: ERROR_MESSAGES.NOT_FOUND,
    errorCode: STATUS_CODES.NOT_FOUND,
    message: "Account is not existed"
  })
  const user = existed.toJSON()
  if (user.password !== value.password) throw new AuthenticationError({
    error: ERROR_MESSAGES.WRONG_PASSWORD,
    message: ERROR_MESSAGES.WRONG_PASSWORD,
  })
  delete user.password
  const payload = { userId: user.userId }
  user.accessToken = JWTService.generateAccessToken(payload)
  user.refreshToken = JWTService.generateRefreshToken(payload)
  return {
    user: user
  }
}

/**@type {import('../types').HandlerService} */
const refreshToken = async ({ body }) => {
  const { value, error } = Joi.object({
    refreshToken: Joi.string().required()
  }).validate(body, { abortEarly: false })
  if (error) throw new ValidationError(error)
  const { data, error: error_ } = JWTService.verifyToken(value.refreshToken)
  if (error_) {
    throw new AuthenticationError({
      error: ERROR_MESSAGES[error_.name],
      message: `RefreshToken is ${JWT_MESSAGES[error_.name]}`
    })
  }
  delete data.iat
  delete data.exp
  const token = JWTService.generateAccessToken(data)
  return { token: token }
}


const AuthService = {
  register,
  refreshToken,
  login
}

export { AuthService }