import { STATUS_CODE, STATUS_NAME } from '@configs'
import { ColorService } from '@services'
import { RequestHandler } from '@types'


export const createColor: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await ColorService.createColor({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getColor: RequestHandler = async (req, res) => {
  const { params, query } = req
  const data = await ColorService.getColor({ params, query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getColors: RequestHandler = async (req, res) => {
  const { query } = req
  const data = await ColorService.getColors({ query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const updateColor: RequestHandler = async (req, res) => {
  const { params, body } = req
  const data = await ColorService.updateColor({ params, body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const deleteColor: RequestHandler = async (req, res) => {
  const { params } = req
  const data = await ColorService.deleteColor({ params })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const deleteColors: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await ColorService.deleteColors({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}