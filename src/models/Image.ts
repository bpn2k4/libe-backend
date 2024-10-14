import { BOOLEAN, DATE, INTEGER, NOW, STRING, sql } from "@databases";

const Image = sql.define('image', {
  imageId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  link: {
    type: STRING,
    allowNull: false,
  },
  path: {
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
  tableName: 'images',
  timestamps: false,
  initialAutoIncrement: '100001',
})

export default Image