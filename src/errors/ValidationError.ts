import { ERROR_NAME } from '@configs'

class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = ERROR_NAME.VALIDATION_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ValidationError