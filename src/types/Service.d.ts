type Payload = { userId: Number }


type File = {
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  fileType: 'images' | 'videos' | 'others',
  extension: String,
  destination: String,
  filename: String,
  path: String,
  size: Number
}
type ServiceProps = {
  body: Object,
  params: Object,
  query: Object,
  payload: Payload,
  file: File,
  files: File[],
}

type ServiceResult = {
  status: 'SUCCESS' | 'FAIL',
  code: Number,
  statusCode: Number,
  error: String,
  errorCode: Number,
  message: String,
  rest: any
}

/** Service for handle request from controller */
export type HandlerService = (ServiceProps: ServiceProps) => Promise<ServiceResult>

type JWTError = {
  name: String,
  message: String
}
/** JWT service */
export declare type JWTService = {
  /** Generate a access token with rsa 256 algorithm */
  generateAccessToken: (payload: any) => String,

  /** Generate a refresh token with rsa 256 algorithm */
  generateRefreshToken: (payload: any) => String,

  /** Verify a access token */
  verifyToken: (token: String) => { data?: Payload, error?: JWTError }
}