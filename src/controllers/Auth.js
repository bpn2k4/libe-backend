import { STATUS, STATUS_CODES } from '../constants/index.js'
import { AuthService } from '../services/index.js'

/**@type {import('../types').HandlerFunction} */
const login = async (req, res, next) => {
  try {
    const data = await AuthService.login({ body: req.body })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

/**@type {import('../types').HandlerFunction} */
const register = async (req, res, next) => {
  try {
    const data = await AuthService.register({ body: req.body, files: req.files })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) {
    console.log(error); next(error)
  }
}

/**@type {import('../types').HandlerFunction} */
const refreshToken = async (req, res, next) => {
  try {
    const data = await AuthService.refreshToken({ body: req.body })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

const AuthController = {
  login,
  register,
  refreshToken
}

export { AuthController }