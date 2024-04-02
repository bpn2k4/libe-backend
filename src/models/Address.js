import { STRING, TEXT, BOOLEAN, INTEGER } from 'sequelize'
import { sql } from '../databases/index.js'

export const Address = sql.define('Address', {
  addressId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  userId: {
    type: INTEGER,
    allowNull: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  phone: {
    type: STRING,
    allowNull: false
  },
  villageId: {
    type: INTEGER,
    allowNull: false
  },
  street: {
    type: STRING,
    allowNull: false
  },
  detail: {
    type: STRING,
    allowNull: true
  },
  isDeleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.address',
  timestamps: true,
  paranoid: true,
})

export const Village = sql.define('Village', {
  villageId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  type: {
    type: STRING,
    allowNull: false
  },
  districtId: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'tb.village',
  timestamps: true,
  paranoid: true,
})

export const District = sql.define('District', {
  districtId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  type: {
    type: STRING,
    allowNull: false
  },
  provinceId: {
    type: INTEGER,
    allowNull: false
  }
}, {
  tableName: 'tb.district',
  timestamps: true,
  paranoid: true,
})

export const Province = sql.define('Province', {
  provinceId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: STRING,
    allowNull: false
  },
  type: {
    type: STRING,
    allowNull: false
  }
}, {
  tableName: 'tb.province',
  timestamps: true,
  paranoid: true,
})