import { Sequelize, Options } from 'sequelize'

import { ENVIRONMENT } from '@configs'
import path from 'path'

const sqliteConfig: Options = {
  dialect: 'sqlite',
  storage: path.join(ENVIRONMENT.SQLITE_DATA_DIR, 'database.sqlite'),
  logging: console.log
}

const otherConfig: Options = {
  dialect: ENVIRONMENT.SQL_DATABASE_TYPE == 'postgres' ? 'postgres' : 'mysql',
  database: ENVIRONMENT.SQL_DATABASE_NAME,
  username: ENVIRONMENT.SQL_DATABASE_USER,
  password: ENVIRONMENT.SQL_DATABASE_PASSWORD,
  host: ENVIRONMENT.SQL_DATABASE_HOST,
  port: ENVIRONMENT.SQL_DATABASE_PORT,
  timezone: '+07:00',
  logging: () => 1
}

const config = ENVIRONMENT.SQL_DATABASE_TYPE == 'sqlite' ? sqliteConfig : otherConfig
const sql = new Sequelize(config)

export default sql