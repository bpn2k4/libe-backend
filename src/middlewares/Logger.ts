import type { NextFunction, Request, Response } from 'express'

import Utils from '@utils'

const Logger = () => {
  return (req: any, res: any, next: NextFunction) => {
    res['startAt'] = Number(new Date())
    res.setHeader('x-powered-by', 'GPT-3.5')
    res.on('finish', () => {
      const currentTime = Utils.getCurrentTime()
      const startAt = res['startAt']
      const message = `${currentTime} ${req.method} ${req.originalUrl} ${res.statusCode} ${Number(new Date()) - startAt}ms`
      console.log(message)
    })
    next()
  }
}

export default Logger