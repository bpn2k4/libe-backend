import { AuthService } from '../services/index.js'

/**@type {import('../types').HandlerFunction} */
const login = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import('../types').HandlerFunction} */
const register = async (req, res, next) => {
  try {
    const { statusCode, ...data } = await AuthService.register({ body: req.body, files: req.files })
    return res.status(statusCode).json({ ...data })
  } catch (error) {
    console.log(error); next(error)
  }
}

/**@type {import('../types').HandlerFunction} */
const refreshToken = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

const AuthController = {
  login,
  register,
  refreshToken
}

export { AuthController }