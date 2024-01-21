import { Router } from 'express'
import { AuthController } from '../controllers/index.js'
import { uploadFile } from '../middlewares/index.js'

const router = Router()

router.post('/auth/register', uploadFile.image().single('avatar'), AuthController.register)

export { router as V1 }