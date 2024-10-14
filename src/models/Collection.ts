import { sql, STRING, INTEGER, BOOLEAN, TEXT, DATE, NOW } from '@databases'

const Collection = sql.define('collection', {
  collectionId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  slug: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: TEXT,
    allowNull: true,
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
  tableName: 'collections',
  timestamps: false,
  initialAutoIncrement: '100001',
})

export default Collection