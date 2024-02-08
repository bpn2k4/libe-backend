import { Request, Response, NextFunction } from 'express'
// import { Multer } from 'multer'

type Error = {
  code: String,
  name: String,
  error: String,
  errorCode: Number,
  message: String,
}

export type errorMiddleware = (err: Error, req: Request, res: Response, next?: NextFunction) => Promise<void>

// export type uploadFile = Multer