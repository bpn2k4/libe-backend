import type { NextFunction, Request, Response } from 'express'


const ErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {

  console.log("error", error)

  return res.status(500).json({
    status: "Error server"
  })
}

export default ErrorHandler