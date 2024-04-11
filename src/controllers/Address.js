import { STATUS, STATUS_CODES } from "../constants/index.js"
import AddressService from "../services/Address.js"

const createProvince = async (req, res, next) => {
  try {
    const data = await AddressService.createProvince({ body: req.body })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}
const updateProvince = async (req, res, next) => {
  try {
    // const data = await AddressService.createCollection({ body: req.body })
    const data = { data: 'ok' }
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

const getListDisictInProvince = async (req, res, next) => {
  try {
    const data = { data: 'ok' }
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

const createDistrict = async (req, res, next) => {
  try {
    // const data = await AddressService.createCollection({ body: req.body })
    const data = { data: 'ok' }
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}
const updateDistrict = async (req, res, next) => {
  try {
    // const data = await AddressService.createCollection({ body: req.body })
    const data = { data: 'ok' }
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

const createVillage = async (req, res, next) => {
  try {
    // const data = await AddressService.createCollection({ body: req.body })
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}

const getListVillageInDistrict = async (req, res, next) => {
  try {
    // const data = await AddressService.createCollection({ body: req.body })
    const data = { data: 'ok' }
    return res.status(STATUS_CODES.SUCCESS).json({ result: STATUS.SUCCESS, ...data })
  } catch (error) { next(error) }
}


const AddressController = {
  createProvince,
  updateProvince,
  createDistrict,
  updateDistrict,
  getListDisictInProvince,
  createVillage,
  getListVillageInDistrict
}

export default AddressController 