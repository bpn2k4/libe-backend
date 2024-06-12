import type { Request, Response } from 'express'

const login = async (req: Request, res: Response) => {

  const wait = (ms: number) => new Promise(e => setTimeout(e, ms))
  await wait(100)
  throw new Error("")

  return res.status(200).json({
    function: "Login"
  })
}

const AuthController = {
  login
}

export default AuthController