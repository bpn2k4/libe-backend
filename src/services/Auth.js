import { ERROR_MESSAGES, JWT_MESSAGES, STATUS, STATUS_CODES } from '../constants/index.js'
import { AuthenticationError, JsonWebTokenError, ResourceExistedError, ValidationError } from '../errors/index.js'
import { User } from '../models/index.js'
import { Op } from '../databases/index.js'
import { AuthValidator } from '../validations/Auth.js'
import { JWTService } from './JWT.js'

/**@type {import('../types').HandlerService} */
const register = async ({ body, files = [] }) => {
  const avatar = files[0] ? files[0].path.split('\\').join('/') : undefined
  const { value, error } = AuthValidator.validateRegisterForm(body)
  if (error) throw error
  if (value.username) {
    const user = await User.findOne({
      where: { username: value.username },
      paranoid: true
    })
    if (user) throw new ResourceExistedError(`Username {${value.username}} has been existed`)
  }
  if (value.phone) {
    const user = await User.findOne({
      where: { phone: value.phone },
      paranoid: true
    })
    if (user) throw new ResourceExistedError(`Phone {${value.phone}} has been existed`)
  }
  if (value.email) {
    const user = await User.findOne({
      where: { email: value.email },
      paranoid: true
    })
    if (user) throw new ResourceExistedError(`Email {${value.email}} has been existed`)
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
    code: STATUS_CODES.CREATED,
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
  if (!existed) throw new AuthenticationError(ERROR_MESSAGES.NOT_FOUND, ERROR_MESSAGES.NOT_FOUND, STATUS_CODES.NOT_FOUND)
  const user = existed.toJSON()
  if (user.password !== value.password) throw new AuthenticationError(ERROR_MESSAGES.WRONG_PASSWORD, ERROR_MESSAGES.WRONG_PASSWORD, STATUS_CODES.BAD_REQUEST)
  delete user.password
  const payload = { userId: user.userId }
  user.accessToken = JWTService.generateAccessToken(payload)
  user.refreshToken = JWTService.generateRefreshToken(payload)
  return {
    code: STATUS_CODES.SUCCESS,
    user: user
  }
}

/**@type {import('../types').HandlerService} */
const refreshToken = async ({ body }) => {
  const refreshToken = body.refreshToken
  if (typeof (refreshToken) == 'undefined') {
    throw new ValidationError(`"refreshToken" is required`)
  }
  if (typeof (refreshToken) != 'string') {
    throw new ValidationError(`"refreshToken" must be string`)
  }
  const { data, error } = JWTService.verifyToken(refreshToken)
  if (error) throw new AuthenticationError(`RefreshToken ${JWT_MESSAGES[error.message]}`, `${ERROR_MESSAGES[error.message]}`, STATUS_CODES.UNAUTHENTICATED)
  delete data.iat
  delete data.exp
  const token = JWTService.generateAccessToken(data)
  return {
    code: STATUS_CODES.SUCCESS,
    token: token
  }
}


const AuthService = {
  register,
  refreshToken,
  login
}

export { AuthService }