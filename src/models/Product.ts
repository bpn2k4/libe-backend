import { sql, INTEGER, STRING, BOOLEAN, DATE, NOW } from "@databases"

const Product = sql.define('product', {
  productId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
    defaultValue: NOW
  },
  deletedAt: {
    type: DATE,
    allowNull: true
  }
}, {
  tableName: 'products',
  timestamps: false,
  initialAutoIncrement: '100001',
})

export default Product