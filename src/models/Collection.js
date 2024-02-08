import {
  BOOLEAN,
  DATE,
  INTEGER,
  STRING,
  TEXT,
  sql
} from '../databases/index.js'

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
    allowNull: false
  },
  description: {
    type: TEXT,
    allowNull: true
  },
  color: {
    type: STRING(6),
    allowNull: true
  },
  image: {
    type: STRING,
    allowNull: true
  }
}, {
  tableName: 'tb.collection',
  timestamps: true,
  paranoid: true
})