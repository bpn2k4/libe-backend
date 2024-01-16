import { Router } from 'express'
import { AuthController } from '../controllers/index.js'

const router = Router()

router.get('/auth/register', AuthController.register)

export { router as V1 }