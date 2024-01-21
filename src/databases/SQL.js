import { Sequelize, DataTypes, Op } from 'sequelize'
import { resolve } from 'path'
import fs from 'fs'

import { Logger } from '../helpers/index.js'
import {
  SQL_DATABASE_TYPE,
  SQL_DATABASE_HOST,
  SQL_DATABASE_NAME,
  SQL_DATABASE_PASSWORD,
  SQL_DATABASE_PORT,
  SQL_DATABASE_USER
} from '../configs/index.js'

const sql = new Sequelize({
  host: SQL_DATABASE_HOST,
  port: SQL_DATABASE_PORT,
  database: SQL_DATABASE_NAME,
  username: SQL_DATABASE_USER,
  password: SQL_DATABASE_PASSWORD,
  storage: resolve('./data/sqlite.db'),
  logging: (sql) => {
    return
    const date = new Date()
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')
    const time = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
    Logger.info('[SQL] ' + sql)
    fs.appendFileSync(resolve('./data/sql.log'), `${time} ${sql}\n`, { encoding: 'utf-8' })
  },
  dialect: SQL_DATABASE_TYPE,
})


export { sql, Op }
export const { INTEGER, STRING, BOOLEAN, DATE, FLOAT, TEXT } = DataTypes