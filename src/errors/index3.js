import { ERROR_NAMES, STATUS_CODES } from '../constants/index.js'

export class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = ERROR_NAMES.VALIDATION_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export class FileFilterError extends Error {
  constructor(message = '', field = '', allow = []) {
    super(message)
    this.name = ERROR_NAMES.FILE_FILTER_ERROR
    this.field = field
    this.allow = allow
    Error.captureStackTrace(this, this.constructor)
  }
}

export class ResourceExistedError extends Error {
  constructor(message = '') {
    super(message)
    this.name = ERROR_NAMES.RESOURCE_EXISTED_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export class JsonWebTokenError extends Error {
  constructor(message = '', type = 'AccessToken') {
    super(message)
    this.type = type
    this.name = ERROR_NAMES.JSON_WEB_TOKEN_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export class NotFoundResourceError extends Error {
  constructor(message) {
    super(message)
    this.name = ERROR_NAMES.NOT_FOUND_RESOURCE_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export class AuthenticationError extends Error {
  constructor(message = '', error = '', errorCode = 0) {
    super(message)
    this.name = ERROR_NAMES.AUTHENTICATION_ERROR
    this.error = error
    this.errorCode = errorCode
    Error.captureStackTrace(this, this.constructor)
  }
}

export class AuthorizationError extends Error {
  constructor(message = '', error = '', errorCode = 0) {
    super(message)
    this.name = ERROR_NAMES.AUTHORIZATION_ERROR
    this.error = error
    this.errorCode = errorCode
    Error.captureStackTrace(this, this.constructor)
  }
}