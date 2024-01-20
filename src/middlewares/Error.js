import { ERROR_NAMES } from '../constants/index.js'

export const errorMiddleware = (err, res, req, next) => {
  console.log(err)
  switch (err.name) {

    case ERROR_NAMES.VALIDATION_ERROR: {
      return res
        .status(STATUS_CODES.BAD_REQUEST)
        .json({
          errorCode: STATUS_CODES.BAD_REQUEST,
          error: err.message,
          message: MESSAGES.INVALID_PARAMETER
        })
    }

  }
  return res.status(500).send('Error from server')
}