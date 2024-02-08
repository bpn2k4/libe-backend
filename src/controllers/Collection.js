
/**@type {import("../types").HandlerFunction} */
const createCollection = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
const updateCollection = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
const getCollection = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
const deleteCollection = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

export const CollectionController = {
  createCollection,
  updateCollection,
  getCollection,
  deleteCollection
}