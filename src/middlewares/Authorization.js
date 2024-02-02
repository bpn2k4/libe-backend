import { AuthorizationError } from '../errors/index.js'
import { User } from '../models/index.js'

const authorization = (...roles) => {

  return async (req, res, next) => {
    try {
      const userId = req.payload.userId
      const user = await User.findOne({
        where: { userId: userId },
        paranoid: true,
        raw: true
      })
      if (!user) {
        throw new AuthorizationError()
      }
      if (roles.includes(user.role)) {
        next()
      }
      throw new AuthorizationError()
    } catch (error) {
      next(error)
    }
  }
}

export { authorization }