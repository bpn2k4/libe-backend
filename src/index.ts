console.clear()
import cors from 'cors'
import express from 'express'
import fs from 'fs/promises'

import { ENVIRONMENT } from '@configs'
import { AuthController } from '@controllers'
import { sql } from '@databases'
import { ErrorHandler, Logger } from '@middlewares'
import { initModel } from '@models'
import { RouterV1 } from '@routers'

const main = async () => {
  for (const key in ENVIRONMENT) {
    console.log(`Using config ${key} = ${ENVIRONMENT[key as keyof typeof ENVIRONMENT]}`)
  }
  const app = express()

  // Setup server
  app.use(Logger())
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/uploads', express.static(`./uploads`))

  // Create upload folder
  await fs.mkdir(`./uploads`, { recursive: true })

  // Connect to database and create tables
  await sql.authenticate()
  console.log('Connect to database successfully!')
  await initModel()

  app.get('/monitor/liveness', (req, res) => {
    return res.status(200).send('Alive')
  })
  app.get('/monitor/readiness', async (req, res, next) => {
    try {
      await sql.query('SELECT 1+1 AS result')
      return res.status(200).send('Ready')
    } catch (error) {
      next(error)
    }
  })

  app.get('/', (req, res) => {
    return res.status(200).send("<h1>Hello World</h1>")
  })

  app.get('/login', AuthController.login)

  app.get('/test', async (req, res, next) => {
    try {
      const wait = (ms: number) => new Promise(e => setTimeout(e, ms))
      console.log(123)
      await wait(100)
      throw new Error("")

    } catch (error) {
      next(error)
    }


  })

  app.use('/api/v1', RouterV1)
  app.use(ErrorHandler)

  app.listen(ENVIRONMENT.PORT, () => {
    console.log(`App is running at http://localhost:${ENVIRONMENT.PORT}`)
  })
}

main()