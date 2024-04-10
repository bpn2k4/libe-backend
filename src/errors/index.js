import { ERROR_MESSAGES, ERROR_NAME, STATUS_CODES } from '../constants/index.js'

export class ValidationError extends Error {
  constructor(error) {
    super(error.message)
    Error.captureStackTrace(this, this.constructor)
    this.name = ERROR_NAME.VALIDATION_ERROR
    this.code = STATUS_CODES.BAD_REQUEST
    this.error = ERROR_MESSAGES.INVALID_PARAMETER
    this.errorCode = STATUS_CODES.BAD_REQUEST
    this.message = error.message
  }
}

export class ResourceExistedError extends Error {
  constructor({ code = 400, error = ERROR_MESSAGES.EXISTED, errorCode = 400, message = '' }) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = ERROR_NAME.RESOURCE_EXISTED_ERROR
    this.code = code
    this.error = error
    this.errorCode = errorCode
    this.message = message
  }
}

export class NotFoundResourceError extends Error {
  constructor({ code = 404, error = ERROR_MESSAGES.INVALID_PARAMETER, errorCode = 404, message = '' }) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = ERROR_NAME.NOT_FOUND_RESOURCE_ERROR
    this.code = code
    this.error = error
    this.errorCode = errorCode
    this.message = message
  }
}

export class FileFilterError extends Error {
  constructor({ code = 400, error = '', errorCode = 400, message = '', field = '', allow = [] }) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = ERROR_NAME.FILE_FILTER_ERROR
    this.code = code
    this.error = error
    this.errorCode = errorCode
    this.message = `"${field} only accepts ${allow.join(', ')}"`
  }
}

export class AuthenticationError extends Error {
  constructor({ code = 401, error = '', errorCode = 401, message = '' }) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = ERROR_NAME.AUTHENTICATION_ERROR
    this.code = code
    this.error = error
    this.errorCode = errorCode
    this.message = message
  }
}

export class AuthorizationError extends Error {
  constructor({ code = 401, error = '', errorCode = 401, message = '' }) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
    this.name = ERROR_NAME.AUTHORIZATION_ERROR
    this.code = code
    this.error = error
    this.errorCode = errorCode
    this.message = message
  }
}