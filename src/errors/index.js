import { ERROR_NAMES } from '../constants/index.js'

export class ValidationError extends Error {
  constructor(error) {
    super(error.message)
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