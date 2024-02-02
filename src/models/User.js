import { ROLES } from '../constants/index.js'
import {
  BOOLEAN,
  DATE,
  INTEGER,
  STRING,
  sql
} from '../databases/index.js'
import { USER } from '../schemas/index.js'

const User = sql.define('User', {
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
    type: String,
    allowNull: true
  },
  phone: {
    type: STRING(10),
    allowNull: true
  },
  phoneVerified: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: USER.phoneVerified.DEFAULT
  },
  email: {
    type: STRING,
    allowNull: true,
  },
  emailVerified: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: USER.emailVerified.DEFAULT
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
    defaultValue: USER.gender.DEFAULT
  },
  role: {
    type: STRING(15),
    allowNull: false,
    defaultValue: ROLES.DEFAULT
  },
  isLock: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'tb.user',
  timestamps: true,
  paranoid: true
})

export { User }