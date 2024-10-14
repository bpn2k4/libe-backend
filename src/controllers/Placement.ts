import { STATUS_CODE, STATUS_NAME } from '@configs'
import { PlacementService } from '@services'
import { RequestHandler } from '@types'


export const createProvince: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await PlacementService.createProvince({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getProvinces: RequestHandler = async (req, res) => {
  const { query } = req
  const data = await PlacementService.getProvinces({ query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getProvince: RequestHandler = async (req, res) => {
  const { params, query } = req
  const data = await PlacementService.getProvince({ params, query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const updateProvince: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await PlacementService.updateProvince({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const deleteProvince: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await PlacementService.deleteProvince({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const deleteProvinces: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await PlacementService.deleteProvinces({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getDistrictsInProvince: RequestHandler = async (req, res) => {
  const { params, query } = req
  const data = await PlacementService.getDistrictsInProvince({ params, query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const createDistrict: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await PlacementService.createDistrict({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const getWardsInDistrict: RequestHandler = async (req, res) => {
  const { params, query } = req
  const data = await PlacementService.getWardsInDistrict({ params, query })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}

export const createWard: RequestHandler = async (req, res) => {
  const { body } = req
  const data = await PlacementService.createWard({ body })
  return res.status(STATUS_CODE.SUCCESS).json({
    status: STATUS_NAME.SUCCESS,
    ...data
  })
}