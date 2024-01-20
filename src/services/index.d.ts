type Payload = { userId: Number }

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
/** JWT service */
export declare type JWTService = {
  /** Generate a access token with rsa 256 algorithm */
  generateAccessToken: (payload: any) => String,

  /** Generate a refresh token with rsa 256 algorithm */
  generateRefreshToken: (payload: any) => String,

  /** Verify a access token */
  verifyToken: (token: String) => { data?: Payload, error?: any }
}