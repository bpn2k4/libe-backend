import { INTEGER } from 'sequelize'
import { sql } from '../databases/index.js'

export const Cart = sql.define('Cart', {
  cartId: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  userId: {
    type: INTEGER,
    allowNull: false
  },
  modelId: {
    type: INTEGER,
    allowNull: false
  },
  number: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'tb.cart',
  timestamps: false,
  paranoid: false
})