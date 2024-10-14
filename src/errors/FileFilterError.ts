
import { ERROR_NAME } from '@configs'

class FileFilterError extends Error {
  constructor(message: string) {
    super(message)
    this.name = ERROR_NAME.FILE_FILTER_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

export default FileFilterError