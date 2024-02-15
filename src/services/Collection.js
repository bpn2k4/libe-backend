import { ValidationError } from '../errors/index.js'
import { CollectionValidator } from '../validations/index.js'
import { Helper } from "../helpers/index.js"
import { Collection } from '../models/index.js'

/**@type {import('../types').HandlerService} */
const example = async ({ }) => {

}
/**@type {import('../types').HandlerService} */
const createCollection = async ({ body }) => {
  const { value, error } = CollectionValidator.validateCreateCollectionForm(body)
  if (error) throw new ValidationError(error)
  const collection = await Collection.create({
    ...value,
    slug: Helper.convertStringToSlug(value.name)
  })
  return { collection }
}

/**@type {import('../types').HandlerService} */
const getListCollection = async ({ query }) => {
  console.log(query)
  const { value, error } = CollectionValidator.validateGetListCollectionQuery(query)
  if (error) throw new ValidationError(error)
  if (value.q) {

  }
  const { count: total, rows: collections } = await Collection.findAndCountAll({
    limit: value.limit,
    offset: value.page * value.limit,
    paranoid: true,
  })
  return { total, collections }
}


export const CollectionService = {
  createCollection,
  getListCollection
}