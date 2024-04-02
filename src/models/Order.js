import { INTEGER, STRING } from 'sequelize'
import { sql } from '../databases/index.js'

export const Order = sql.define('Order', {
  orderId: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
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
  statusId: {
    type: INTEGER,
    allowNull: false
  },
}, {
  tableName: 'tb.order',
  timestamps: false,
  paranoid: false
})

export const OrderDetail = sql.define('OrderDetail', {
  id: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  orderId: {
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
  },
  originPrice: {
    type: INTEGER,
    allowNull: false
  },
  buyPrice: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'tb.order.detail',
  timestamps: false,
  paranoid: false
})

export const Status = sql.define('Status', {
  statusId: {
    primaryKey: true,
    type: INTEGER,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false
  }
}, {
  tableName: 'tb.order',
  timestamps: false,
  paranoid: false
})