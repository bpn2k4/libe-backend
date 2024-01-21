import { Request as _Request, Response as _Response, NextFunction } from 'express'

type Payload = {
  userId: Number
}

export type Request = _Request & Payload
export type Response = _Response

/** Controller handler function */
export type HandlerFunction = (req: Request, res: Response, next?: NextFunction) => void

