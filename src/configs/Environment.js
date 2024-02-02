import dotenv from 'dotenv'
import { resolve } from 'path'
import { Logger } from '../helpers/index.js'

dotenv.config()


export const ROOT = resolve('.')
// port for app running
export const PORT = process.env.PORT ?? '8000'

// sql database config
export const SQL_DATABASE_TYPE = process.env.SQL_DATABASE_TYPE ?? 'sqlite'
export const SQL_DATABASE_HOST = process.env.SQL_DATABASE_HOST ?? 'localhost'
export const SQL_DATABASE_PORT = process.env.SQL_DATABASE_PORT ?? '3306'
export const SQL_DATABASE_NAME = process.env.SQL_DATABASE_NAME ?? 'database'
export const SQL_DATABASE_USER = process.env.SQL_DATABASE_USER ?? 'root'
export const SQL_DATABASE_PASSWORD = process.env.SQL_DATABASE_PASSWORD ?? '123456'

// token config
export const PUBLIC_KEY_PATH = process.env.PUBLIC_KEY_PATH
export const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH
export const ACCESS_TOKEN_DURATION = process.env.ACCESS_TOKEN_DURATION ?? '60s'
export const REFRESH_TOKEN_DURATION = process.env.REFRESH_TOKEN_DURATION ?? '1d'

