
import { sql } from '@databases'

import Address from './Address'
import Collection from './Collection'
import Color from './Color'
import Image from './Image'
import { District, Province, Ward } from './Placement'
import Product from './Product'
import {
  UserAddress,
  CollectionImage,
  CollectionColor,
  CollectionProduct,
  ProductImage
} from './ThroughNN'
import User from './User'


District.belongsTo(Province, {
  foreignKey: 'provinceId',
  as: 'province'
})
Province.hasMany(District, {
  foreignKey: 'provinceId',
  as: 'districts'
})
Ward.belongsTo(District, {
  foreignKey: 'districtId',
  as: 'district'
})
District.hasMany(Ward, {
  foreignKey: 'districtId',
  as: 'wards'
})
Address.belongsTo(Ward, {
  foreignKey: 'wardId',
  as: 'ward'
})
Ward.hasMany(Address, {
  foreignKey: 'wardId',
  as: 'addresses'
})
User.belongsToMany(Address, {
  through: UserAddress,
  as: 'addresses',
  foreignKey: 'userId',
  otherKey: 'addressId',
})
Address.belongsToMany(User, {
  through: UserAddress,
  as: 'users',
  foreignKey: 'addressId',
  otherKey: 'userId',
})
Collection.belongsToMany(Image, {
  through: CollectionImage,
  as: 'images',
  foreignKey: 'collectionId',
  otherKey: 'imageId',
})
Image.belongsToMany(Collection, {
  through: CollectionImage,
  as: 'collections',
  foreignKey: 'imageId',
  otherKey: 'collectionId',
})
Collection.belongsToMany(Color, {
  through: CollectionColor,
  as: 'colors',
  foreignKey: 'collectionId',
  otherKey: 'colorId',
})
Color.belongsToMany(Collection, {
  through: CollectionColor,
  as: 'collections',
  foreignKey: 'colorId',
  otherKey: 'collectionId',
})
Collection.belongsToMany(Product, {
  through: CollectionProduct,
  as: 'products',
  foreignKey: 'collectionId',
  otherKey: 'productId',
})
Product.belongsToMany(Collection, {
  through: CollectionProduct,
  as: 'collections',
  foreignKey: 'productId',
  otherKey: 'collectionId',
})
Product.belongsToMany(Image, {
  through: ProductImage,
  as: 'images',
  foreignKey: 'productId',
  otherKey: 'imageId',
})
Image.belongsToMany(Product, {
  through: ProductImage,
  as: 'products',
  foreignKey: 'imageId',
  otherKey: 'productId',
})

const syncModel = async (sync = false, alter = false, force = false) => {
  if (sync) {
    return sql.sync({
      alter: alter,
      force: force,
      logging: console.log
    })
  }
}

export {
  syncModel,
  District, Province, Ward,
  Address, Collection, Color, Image, Product,
  UserAddress, CollectionImage, CollectionColor, CollectionProduct, ProductImage, User,
}