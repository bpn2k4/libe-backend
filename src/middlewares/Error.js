import fs from 'fs'
import path from 'path'

import { ERROR_MESSAGES, ERROR_NAMES, MULTER_ERROR, STATUS, STATUS_CODES } from '../constants/index.js'
import { ROOT } from '../configs/index.js'


/**@type {import('../types').errorMiddleware} */
export const errorMiddleware = (err, req, res, next) => {
  console.log("Error", err);
  if (req.files) {
    for (const file of req.files) {
      try {
        console.log(path.join(ROOT, file.path))
        fs.unlink(path.join(ROOT, file.path), (e) => 1)
      } catch (error) { console.log("t", error) }
    }
  }
  switch (err.name) {
    case (ERROR_NAMES.AUTHENTICATION_ERROR):
    case (ERROR_NAMES.AUTHORIZATION_ERROR):
    case (ERROR_NAMES.FILE_FILTER_ERROR):
    case (ERROR_NAMES.NOT_FOUND_RESOURCE_ERROR):
    case (ERROR_NAMES.RESOURCE_EXISTED_ERROR):
    case (ERROR_NAMES.VALIDATION_ERROR):
      return res.status(err.code).json({
        result: STATUS.FAIL,
        code: err.code,
        error: err.error,
        errorCode: err.errorCode,
        message: err.message
      })

    case ERROR_NAMES.MULTER_ERROR:
      switch (err.code) {
        case MULTER_ERROR.LIMIT_UNEXPECTED_FILE:
          const isMultiFile = req.files ? req.files.length > 0 : false
          return res
            .status(STATUS_CODES.BAD_REQUEST)
            .json({
              status: STATUS.FAIL,
              code: STATUS_CODES.BAD_REQUEST,
              errorCode: STATUS_CODES.BAD_REQUEST,
              error: ERROR_MESSAGES.INVALID_PARAMETER,
              message: isMultiFile ? `Limited number files` : `"${err.field}" is not allowed`,
            })
        default:
          break;
      }

  }

  return res.status(500).send('Error from server')
}