import { GENDER_TYPE, ROLE_TYPE } from '@configs'
import { BOOLEAN, DATE, INTEGER, NOW, STRING, sql } from '@databases'

const User = sql.define('users', {
  userId: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: STRING,
    allowNull: true
  },
  fullName: {
    type: STRING,
    allowNull: false
  },
  phone: {
    type: STRING,
    allowNull: false,
    unique: true
  },
  phoneVerified: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  email: {
    type: STRING,
    allowNull: true,
    unique: true
  },
  emailVerified: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  birthday: {
    type: DATE,
    allowNull: true
  },
  gender: {
    type: STRING,
    allowNull: false,
    defaultValue: GENDER_TYPE.UNDEFINED
  },
  role: {
    type: STRING,
    allowNull: false,
    defaultValue: ROLE_TYPE.USER
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
  tableName: 'users',
  timestamps: false,
  initialAutoIncrement: '100001',
})

export default User