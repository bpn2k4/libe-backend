import { sql, INTEGER, STRING, BOOLEAN, DATE, NOW } from '@databases'

const Color = sql.define('color', {
  colorId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false
  },
  hex: {
    type: STRING,
    allowNull: false
  },
  deleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
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
  tableName: 'colors',
  timestamps: false,
})

export default Color