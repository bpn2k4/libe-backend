import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const UPLOAD_FOLDER = process.env.UPLOAD_FOLDER ?? 'uploads'

const SQL_DATABASE_TYPE = process.env.SQL_DATABASE_TYPE ?? 'sqlite'
const SQL_DATABASE_HOST = process.env.SQL_DATABASE_HOST ?? '192.168.150.128'
const SQL_DATABASE_PORT = process.env.SQL_DATABASE_PORT ? Number(process.env.SQL_DATABASE_PORT) : 5432
const SQL_DATABASE_NAME = process.env.SQL_DATABASE_NAME ?? 'libe'
const SQL_DATABASE_USER = process.env.SQL_DATABASE_USER ?? 'libe'
const SQL_DATABASE_PASSWORD = process.env.SQL_DATABASE_PASSWORD ?? 'password'

export const ENVIRONMENT = {
  PORT,
  UPLOAD_FOLDER,
  SQL_DATABASE_TYPE,
  SQL_DATABASE_HOST,
  SQL_DATABASE_PORT,
  SQL_DATABASE_NAME,
  SQL_DATABASE_USER,
  SQL_DATABASE_PASSWORD
}