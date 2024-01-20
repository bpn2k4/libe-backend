import Joi from 'joi'

import { MESSAGES, STATUS_CODES } from '../constants/index.js'

export class ValidationError extends Error {
  constructor(error) {
    super(error.message)
    this.name = error.name
    this.statusCode = STATUS_CODES.BAD_REQUEST
    this.error = MESSAGES.INVALID_PARAMETER
    Error.captureStackTrace(this, this.constructor)
  }
}