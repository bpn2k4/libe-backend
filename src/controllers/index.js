export { AuthController } from './Auth.js'
export { CollectionController } from './Collection.js'

/**@type {import("../types").HandlerFunction} */
const sample = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}