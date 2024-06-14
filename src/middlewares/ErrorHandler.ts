import { ERROR_NAME, STATUS_CODE, STATUS_NAME } from '@configs'
import { NextFunction, Request, Response } from '@types'


const ErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log("error", error)
  switch (error.name) {
    case ERROR_NAME.JOI_VALIDATION_ERROR:
    case ERROR_NAME.VALIDATION_ERROR:
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({
          status: STATUS_NAME.FAIL,
          error: error.name,
          message: error.message
        })

    case ERROR_NAME.NOT_FOUND_ERROR:
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .json({
          status: STATUS_NAME.FAIL,
          error: error.name,
          message: error.message
        })
  }

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
    status: STATUS_NAME.FAIL
  })
}

export default ErrorHandler