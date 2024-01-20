import { GENDER } from '../constants/index.js'

export const USER = {
  username: {
    FIELD: 'username',
    PATTERN: /^[a-zA-Z0-9_.]+$/,
    MAX: 16,
    MIN: 5,
    ALLOW_NULL: false
  },
  password: {
    FIELD: 'password',
    PATTERN: /^[a-zA-Z0-9_.!@#$%^&*()+=]+$/,
    ALLOW_NULL: true,
    MAX: 32,
    MIN: 6
  },
  fullName: {
    ALLOW_NULL: false,
    MAX: 50
  },
  phone: {
    MAX: 10,
    MIN: 10,
    PATTERN: /^0\d{9}$/
  },
  phoneVerified: {
    DEFAULT: false
  },
  email: {
  },
  emailVerified: {
    DEFAULT: false
  },
  birthday: {
    ALLOW_NULL: true,
    PATTERN: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
  },
  gender: {
    DEFAULT: GENDER.UNSET
  }
}