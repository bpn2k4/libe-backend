import { sql } from '../databases/index.js'
import { Address, District, Province, Village } from './Address.js'
import { Cart } from './Cart.js'
import { Collection, CollectionProduct } from './Collection.js'
import { Order, OrderDetail, Status } from './Order.js'
import { Attribute, Image, Model, Product, ProductImage, Variation, VariationOption } from './Product.js'
import { User } from './User.js'

const createAssociation = () => {
  Address.belongsTo(Village, {
    as: 'village',
    foreignKey: 'villageId'
  })
  Village.belongsTo(District, {
    as: 'district',
    foreignKey: 'districtId'
  })
  District.hasMany(Village, {
    as: 'villages',
    foreignKey: 'districtId'
  })
  District.belongsTo(Province, {
    as: 'province',
    foreignKey: 'provinceId'
  })
  Province.hasMany(District, {
    as: 'districts',
    foreignKey: 'provinceId'
  })
  User.hasMany(Address, {
    as: 'addresses',
    foreignKey: 'userId'
  })
  User.belongsTo(Address, {
    as: 'defaultAddress',
    foreignKey: 'defaultAdressId'
  })
}

const syncDatabase = async (force = false, alter = true) => {
  createAssociation()
  return await sql.sync({
    force: force,
    alter: alter
  })
}

export {
  syncDatabase,
  Address, District, Province, Village,
  Cart, Collection, CollectionProduct,
  Order, OrderDetail, Status, Attribute,
  Image, Model, Product, ProductImage,
  Variation, VariationOption, User
}