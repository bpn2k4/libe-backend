import cors from 'cors'
import express from 'express'

import { sql } from '@databases'
import { ErrorHandler, Logger } from '@middlewares'
import { ApiRouterV1 } from '@routers'
import { ENVIRONMENT } from '@configs'

const app = express()

app.use(Logger())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static(ENVIRONMENT.UPLOAD_FOLDER))

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

app.get('/', (_, res) => {
  return res.status(200).send("<h1>Hello World</h1>")
})

app.use('/api/v1', ApiRouterV1)
app.use(ErrorHandler)

export default app