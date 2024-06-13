import type { Request as _Request, Response, NextFunction } from 'express'
import { ValidationError } from 'joi'

type Payload = {
  userId: String
}

type Request = _Request & Payload
export {
  Request,
  Response,
  NextFunction
}

export type RequestHandler = (req: Request, res: Response) => Promise<Response | void>

export type ServiceParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
  file?: Express.Multer.File,
  files?: Express.Multer.File[],
}

export type ServiceHandler = (data: ServiceParams) => any

export type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}

export { ValidationError }