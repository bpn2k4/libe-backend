import { ERROR_MESSAGES, STATUS, STATUS_CODES } from '../constants/index.js'
import { ResourceExistedError } from '../errors/index.js'
import { User } from '../models/index.js'
import { AuthValidator } from '../validations/Auth.js'
import { JWTService } from './JWT.js'

/**@type {import('../types').HandlerService} */
const register = async ({ body, files }) => {
  const avatar = files[0] ? files[0].path.split('\\').join('/') : undefined
  const { value, error } = AuthValidator.validateRegisterForm(body)
  if (error) throw error
  if (value.username) {
    const user = await User.findOne({
      where: { username: value.username }
    })
    if (user) throw new ResourceExistedError(`Username {${value.username}} has been existed`)
  }
  if (value.phone) {
    const user = await User.findOne({
      where: { phone: value.phone }
    })
    if (user) throw new ResourceExistedError(`Phone {${value.phone}} has been existed`)
  }
  if (value.email) {
    const user = await User.findOne({
      where: { email: value.email }
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
    status: STATUS.SUCCESS,
    statusCode: STATUS_CODES.SUCCESS,
    code: STATUS_CODES.CREATED,
    user: user
  }
}


const AuthService = {
  register
}

export { AuthService }