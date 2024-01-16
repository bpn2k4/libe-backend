
/**@type {import("../types").HandlerFunction} */
const login = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
const register = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
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