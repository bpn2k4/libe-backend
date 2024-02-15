import { STATUS, STATUS_CODES } from '../constants/index.js'
import { CollectionService } from "../services/index.js"

/**@type {import("../types").HandlerFunction} */
const createCollection = async (req, res, next) => {
  try {
    const data = await CollectionService.createCollection({ body: req.body })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
const updateCollection = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}

/**@type {import("../types").HandlerFunction} */
const getOneCollection = async (req, res, next) => {
  try {
    return res.status(200).send('hello')
  } catch (error) { next(error) }
}
/**@type {import("../types").HandlerFunction} */
const getListCollection = async (req, res, next) => {
  try {
    const data = await CollectionService.getListCollection({ query: req.query })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
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
  getOneCollection,
  getListCollection,
  deleteCollection
}