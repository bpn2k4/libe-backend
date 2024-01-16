import { Request as _Request, Response as _Response } from 'express'

type Payload = {
    userId: Number
}

export type Request = _Request & Payload
export type Response = _Response

export type HandlerFunction = (req: Request, res: Response, next?: Function) => void