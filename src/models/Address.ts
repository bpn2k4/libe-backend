import { BOOLEAN, INTEGER, STRING, DATE, sql, NOW } from "@databases";

const Address = sql.define('address', {
  addressId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  wardId: {
    type: INTEGER,
    allowNull: false
  },
  street: {
    type: STRING,
    allowNull: false,
  },
  phone: {
    type: STRING,
    allowNull: false,
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
  tableName: 'addresses',
  timestamps: false,
  initialAutoIncrement: '100001',
})

export default Address