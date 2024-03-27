import { NotFoundResourceError, ValidationError } from '../errors/index.js'
import { CollectionValidator } from '../validations/index.js'
import { Helper } from "../helpers/index.js"
import { Collection } from '../models/index.js'
import { sql } from '../databases/SQL.js'

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

/**@type {import('../types').HandlerService} */
const deleteListCollection = async ({ body }) => {
  const { value, error } = CollectionValidator.validateDeleteListCollectionBody(body)
  if (error) throw new ValidationError(error)
  const t = await sql.transaction()
  try {
    const collections = await Collection.findAll({
      where: {
        collectionId: value.collectionIds
      },
      paranoid: true,
      transaction: t
    })
    if (collections.length != value.collectionIds.length) {
      const existCollectionIds = collections.map(collection => collection.dataValues.collectionId)
      const notFoundCollectionIds = value.collectionIds.filter(collectionId => !existCollectionIds.includes(collectionId))
      throw new NotFoundResourceError({ message: `Not found collection id [${notFoundCollectionIds.join(',')}]` })
    }
    const numberofInstanceDeleted = await Collection.destroy({
      where: {
        collectionId: value.collectionIds
      },
      transaction: t
    })
    await t.commit()
    return { totalDeleted: numberofInstanceDeleted, collectionIds: value.collectionIds }
  } catch (error) {
    await t.rollback()
    throw error
  }
}


export const CollectionService = {
  createCollection,
  getListCollection,
  deleteListCollection
}