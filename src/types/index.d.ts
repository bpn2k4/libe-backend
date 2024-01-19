import { Request as _Request, Response as _Response } from 'express'
export * from './Helper'


type Payload = {
    userId: Number
}

export type Request = _Request & Payload
export type Response = _Response

/** Controller */
export type HandlerFunction = (req: Request, res: Response, next?: Function) => void

type ServiceProps = {
    body: Object,
    params: Object,
    query: Object,
    payload: Payload,
    file: any,
    files: any,
}

type ServiceResult = {
    result: 'SUCCESS' | 'FAIL',
    statusCode: Number,
    code: Number,
    errorCode: Number,
    message: String,
    rest: any
}
/** Service for handle request from controller */
export type HandlerService = (ServiceProps: ServiceProps) => Promise<ServiceResult>