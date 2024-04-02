import { STRING, BOOLEAN, DATE, INTEGER } from 'sequelize'
import { GENDER, ROLE } from '../constants/index.js'
import { sql } from '../databases/index.js'

export const User = sql.define('User', {
  userId: {
    primaryKey: true,
    type: INTEGER,
    allowNull: false,
    autoIncrement: true
  },
  username: {
    type: STRING(32),
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: true
  },
  fullName: {
    type: STRING,
    allowNull: true
  },
  phone: {
    type: STRING(10),
    allowNull: true
  },
  isPhoneVerified: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  email: {
    type: STRING,
    allowNull: true,
  },
  isEmailVerified: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  birthday: {
    type: DATE,
    allowNull: true
  },
  avatar: {
    type: STRING,
    allowNull: true
  },
  gender: {
    type: STRING,
    allowNull: false,
    defaultValue: GENDER.UNSET
  },
  role: {
    type: STRING(15),
    allowNull: false,
    defaultValue: ROLE.DEFAULT
  },
  defaultAddressId: {
    type: INTEGER,
    allowNull: true
  },
  isLocked: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isDeleted: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.user',
  timestamps: true,
  paranoid: true,
  initialAutoIncrement: '1000001'
})