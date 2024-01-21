import { Router } from 'express'
import { AuthController } from '../controllers/index.js'
import { uploadFile } from '../middlewares/index.js'

const router = Router()

router.post('/auth/register', uploadFile.image().single('avatar'), AuthController.register)
router.post('/auth/login', AuthController.login)
router.post('/auth/refresh-token', AuthController.refreshToken)

export { router as V1 }