import type { ValidationError } from 'joi'

import { ERROR_NAME } from '@configs'

class JoiValidationError extends Error {
  constructor(error: ValidationError) {
    super(error.message)
    this.name = ERROR_NAME.JOI_VALIDATION_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export default JoiValidationError