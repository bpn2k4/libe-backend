import { STATUS_CODE, STATUS_NAME } from '@configs'
import { CollectionService } from '@services'
import { RequestHandler } from '@types'

export const createCollection: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await CollectionService.createCollection({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getCollections: RequestHandler = async (req, res) => {
  const { query } = req
  const data = await CollectionService.getCollections({ query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getCollection: RequestHandler = async (req, res) => {
  const { params } = req
  const data = await CollectionService.getCollection({ params })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const updateCollection: RequestHandler = async (req, res) => {
  const { params, body } = req
  const data = await CollectionService.updateCollection({ params, body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const deleteCollection: RequestHandler = async (req, res) => {
  const { params } = req
  await CollectionService.deleteCollection({ params })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    message: 'Collection deleted successfully'
  })
}

export const deleteCollections: RequestHandler = async (req, res) => {
  const { body } = req
  await CollectionService.deleteCollections({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    message: 'Collections deleted successfully'
  })
}