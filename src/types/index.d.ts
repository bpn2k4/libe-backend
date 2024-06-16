import type { Request as ExpressRequest, Response, NextFunction } from 'express'
import { ValidationError, ValidationOptions } from 'joi'

type Payload = {
  userId: String
}

interface Request extends ExpressRequest {
  payload?: Payload;
}

export {
  Request,
  Response,
  NextFunction
}

export type RequestHandler = (req: Request, res: Response) => Promise<void | Response>

export type ServiceParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
  file?: Express.Multer.File,
  files?: Express.Multer.File[],
}

export type ServiceHandler = (data: ServiceParams) => Promise<any>

export type ValidationParams = {
  body?: any,
  params?: any,
  query?: any,
  payload?: any,
}

export { ValidationError, ValidationOptions }