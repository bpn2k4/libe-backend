import { ERROR_NAME } from '@configs'

class NotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = ERROR_NAME.NOT_FOUND_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export default NotFoundError