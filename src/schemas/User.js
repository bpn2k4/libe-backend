import { GENDER } from '../constants/index.js'

export const USER = {
  username: {
    FIELD: 'username',
    MAX: 32,
    MIN: 6,
    IS_NULL: false
  },
  password: {
    FIELD: 'password',
    IS_NULL: true
  },
  fullName: {
    IS_NULL: true
  },
  phone: {
    MAX: 10,
    MIN: 10
  },
  phoneVerified: {
    DEFAULT: false
  },
  email: {
  },
  emailVerified: {
    DEFAULT: false
  },
  gender: {
    DEFAULT: GENDER.UNSET
  }
}