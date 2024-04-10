import { ValidationError } from "../errors/index.js"
import { AddressValidator } from "../validations/Address.js"

const createProvince = async ({ body }) => {
  const { value, error } = AddressValidator.validateCreateProvince(body)
  if (error) throw new ValidationError(error)
  return {
    data: value
  }
}
const updateProvince = async ({ }) => {

}
const createDistrict = async ({ }) => {

}
const updateDistrict = async ({ }) => {

}
const getListDisictInProvince = async ({ }) => {

}
const createVillage = async ({ }) => {

}
const getListVillageInDistrict = async ({ }) => {

}


const AddressService = {
  createProvince,
  updateProvince,
  createDistrict,
  updateDistrict,
  getListDisictInProvince,
  createVillage,
  getListVillageInDistrict
}

export default AddressService