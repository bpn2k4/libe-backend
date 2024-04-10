console.clear()
import express from 'express'
import cors from 'cors'
import { resolve } from 'path'
import morgan from 'morgan'

import { PORT } from './configs/index.js'
import { Helper, Logger } from './helpers/index.js'
import { V1 } from './routers/index.js'
import { sql } from './databases/index.js'
import { syncDatabase } from './models/index.js'
import { errorMiddleware, uploadFile } from './middlewares/index.js'

const boost = async () => {


  try {
    await Helper.wait(1000)
    await sql.authenticate()
    Logger.info('Connect to database successfully!')
  } catch (error) {
    Logger.info('Can not connect. Wait for database start...')
    await Helper.wait(5000)
    await sql.authenticate()
  }

  // await syncDatabase()
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cors())
  app.use(morgan('dev'))
  app.use((req, res, next) => {
    res.setHeader('x-powered-by', 'GPT-3.5-Turbo-instruct')
    next()
  })

  app.get('/health/ping', (req, res) => {
    return res.status(200).send('PONG')
  })
  app.get('/health/liveness', (req, res) => {
    return res.status(200).send('OK')
  })

  // await sql.authenticate()
  // await sql.sync()

  app.use('/api/v1', V1)

  app.get('/test', async (req, res) => {

    return res.status(200).json({
      data: 0
    })
  })

  app.post('/api/test', uploadFile.image().single('avatar'), async (req, res) => {
    console.log("file", req.files)
    console.log('body', req.body)
    return res.status(200).send(req.file ?? req.files)
  })

  app.use('/uploads', express.static(resolve('./uploads')))
  app.use('*', (req, res) => {
    res.status(200).send('<h1>Hello World</h1>')
  })
  app.use(errorMiddleware)

  app.listen(PORT, () => {
    console.log('App is running at', `\x1b[32m http://localhost:${PORT} \x1b[0m`)
  })
}

boost()