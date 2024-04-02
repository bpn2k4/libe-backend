import { STRING, TEXT, BOOLEAN, INTEGER } from 'sequelize'
import { sql } from '../databases/index.js'

export const Collection = sql.define('Collection', {
  collectionId: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false
  },
  slug: {
    type: STRING,
    allowNull: true
  },
  description: {
    type: TEXT,
    allowNull: true
  },
  color: {
    type: STRING(6),
    allowNull: true
  },
  isDeleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.collection',
  timestamps: true,
  paranoid: true,
  initialAutoIncrement: '1000001'
})

export const CollectionProduct = sql.define('CollectionProduct', {
  id: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  collectionId: {
    type: INTEGER,
    allowNull: false
  },
  productId: {
    type: INTEGER,
    allowNull: false
  },
}, {
  tableName: 'tb.collection.product',
  timestamps: false,
  paranoid: false,
})