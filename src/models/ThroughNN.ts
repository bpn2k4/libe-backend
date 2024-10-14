import { BOOLEAN, INTEGER, sql } from '@databases'


const UserAddress = sql.define('user_address', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  userId: {
    type: INTEGER,
    allowNull: false
  },
  addressId: {
    type: INTEGER,
    allowNull: false
  },
  isDefault: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'users_addresses',
  timestamps: true,
  paranoid: true,
  indexes: [
    { name: 'user_address_userId_index', fields: ['userId'] },
    { name: 'user_address_addressId_index', fields: ['addressId'] },
    { name: 'user_address_deleted_index', fields: ['deleted'] },
  ]
})

const CollectionImage = sql.define('collection_image', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  collectionId: {
    type: INTEGER,
    allowNull: false
  },
  imageId: {
    type: INTEGER,
    allowNull: false
  },
  isDefault: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  tableName: 'collections_images',
  timestamps: true,
  paranoid: true,
  indexes: [
    { name: 'collection_image_collectionId_index', fields: ['collectionId'] },
    { name: 'collection_image_imageId_index', fields: ['imageId'] },
  ]
})

const CollectionColor = sql.define('collection_color', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  collectionId: {
    type: INTEGER,
    allowNull: false
  },
  colorId: {
    type: INTEGER,
    allowNull: false
  },
  isDefault: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'collections_colors',
  timestamps: true,
  paranoid: true,
  indexes: [
    { name: 'collection_color_collectionId_index', fields: ['collectionId'] },
    { name: 'collection_color_colorId_index', fields: ['colorId'] },
  ]
})

const CollectionProduct = sql.define('collection_product', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  collectionId: {
    type: INTEGER,
    allowNull: false
  },
  productId: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'collections_products',
  timestamps: true,
  paranoid: true,
  indexes: [
    { name: 'collection_product_collectionId_index', fields: ['collectionId'] },
    { name: 'collection_product_productId_index', fields: ['productId'] },
  ]
})

const ProductImage = sql.define('product_image', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  productId: {
    type: INTEGER,
    allowNull: false
  },
  imageId: {
    type: INTEGER,
    allowNull: false
  },
  isPrimary: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isSecondary: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
}, {
  tableName: 'products_images',
  timestamps: true,
  paranoid: true,
  indexes: [
    { name: 'product_image_productId_index', fields: ['productId'] },
    { name: 'product_image_imageId_index', fields: ['imageId'] },
  ]
})



export {
  UserAddress,
  CollectionImage,
  CollectionColor,
  CollectionProduct,
  ProductImage
}