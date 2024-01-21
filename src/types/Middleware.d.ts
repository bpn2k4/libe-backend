import { Request, Response, NextFunction } from 'express'
// import { Multer } from 'multer'

type Error = {
  name: String,
  message: String,
  error: String,
  errorCode: Number,
  type?: 'AccessToken' | 'RefreshToken',
  code: String,
  field: String,
  allow: String[]
}

export type errorMiddleware = (err: Error, req: Request, res: Response, next?: NextFunction) => Promise<void>

// export type uploadFile = Multer