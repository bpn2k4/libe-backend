import { sql } from '../databases/index.js'
import { User } from './User.js'
import { Collection } from './Collection.js'

const createAssociation = () => {
  // Todo
}

const initModel = async (force = false, alter = true) => {
  createAssociation()
  return await sql.sync({
    force: force,
    alter: alter
  })
}

export {
  initModel,
  User,
  Collection
}