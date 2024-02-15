export const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHENTICATED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,

  CONFLICT: 409,
  LOCKED: 423
}

export const ERROR_MESSAGES = {
  INVALID_PARAMETER: 'Invalid parameter',
  EXISTED: 'Resource already exists',
  NOT_FOUND: 'Resource not found',
  WRONG_PASSWORD: 'Wrong password',
  INVALID_TOKEN: 'Invalid token',
  TOKEN_EXPIRED: 'Token expired',
  NOT_ALLOW: 'Not allow',
}

export const ERROR_NAMES = {
  VALIDATION_ERROR: 'ValidationError',
  MULTER_ERROR: 'MulterError',
  FILE_FILTER_ERROR: 'FileFilterError',
  RESOURCE_EXISTED_ERROR: 'ResourceExistedError',
  JSON_WEB_TOKEN_ERROR: 'JsonWebTokenError',
  NOT_FOUND_RESOURCE_ERROR: 'NotFoundResourceError',
  AUTHENTICATION_ERROR: 'AuthenticationError',
  AUTHORIZATION_ERROR: 'AuthorizationError',
}

export const MULTER_ERROR = {
  LIMIT_UNEXPECTED_FILE: 'LIMIT_UNEXPECTED_FILE',

  LIMIT_PART_COUNT: 'LIMIT_PART_COUNT',
  LIMIT_FILE_SIZE: 'LIMIT_FILE_SIZE',
  LIMIT_FILE_COUNT: 'LIMIT_FILE_COUNT',
  LIMIT_FIELD_KEY: 'LIMIT_FIELD_KEY',
  LIMIT_FIELD_VALUE: 'LIMIT_FIELD_VALUE',
  LIMIT_FIELD_COUNT: 'LIMIT_FIELD_COUNT',
  MISSING_FIELD_NAME: 'MISSING_FIELD_NAME',
}

export const JWT_ERROR = {
  INVALID_TOKEN: 'INVALID_TOKEN',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED'
}

export const JWT_MESSAGES = {
  INVALID_TOKEN: 'is invalid',
  TOKEN_EXPIRED: 'is expired',
}

export const STATUS = {
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
}

export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  UNSET: 'UNSET'
}

export const ROLES = {
  SUPPER_ADMIN: 'SUPPER_ADMIN',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER',
  STAFF: 'STAFF',
  MEMBER: 'MEMBER',
  DEFAULT: 'DEFAULT',
}

export const ORDER = {
  DESC: 'desc',
  ASC: 'asc'
}