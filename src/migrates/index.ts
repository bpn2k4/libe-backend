
import { ENVIRONMENT } from '@configs'
import { Sequelize, Options } from 'sequelize'
import fs from 'fs/promises'

const main = async () => {
  const sqliteConfig: Options = {
    dialect: 'sqlite',
    storage: './database.sqlite',
    logging: () => 1
  }

  const otherConfig: Options = {
    dialect: ENVIRONMENT.SQL_DATABASE_TYPE == "postgres" ? "postgres" : "mysql",
    database: ENVIRONMENT.SQL_DATABASE_NAME,
    username: ENVIRONMENT.SQL_DATABASE_USER,
    password: ENVIRONMENT.SQL_DATABASE_PASSWORD,
    host: ENVIRONMENT.SQL_DATABASE_HOST,
    port: ENVIRONMENT.SQL_DATABASE_PORT,
    timezone: "+07:00",
    logging: console.log
  }

  const config = ENVIRONMENT.SQL_DATABASE_TYPE == 'sqlite' ? sqliteConfig : otherConfig
  const sql = new Sequelize(config)

  await sql.authenticate()

  const sqlFilePath = `./src/migrates/table.${ENVIRONMENT.SQL_DATABASE_TYPE}.sql` // ./migrate/table.sqlite.sql
  const sqlQuery = await fs.readFile(sqlFilePath, 'utf8')
  const queries = sqlQuery.split(';').map(query => query.trim()).filter(query => query.length > 0).map(item => item.split("\n").filter(i => !i.startsWith("--")).join("\n"))
  for await (const query of queries) {
    console.log(query)
    await sql.query(query)
  }
  await sql.close()
}

main()