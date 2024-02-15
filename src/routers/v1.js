import { Router } from 'express'
import { AuthController, CollectionController } from '../controllers/index.js'
import { uploadFile, authentication, authorization } from '../middlewares/index.js'
import { ROLES } from '../constants/index.js'

const {
  SUPPER_ADMIN,
  ADMIN,
  MANAGER,
  STAFF,
  MEMBER,
  DEFAULT
} = ROLES

const router = Router()

router.post('/auth/register', uploadFile.image().single('avatar'), AuthController.register)
router.post('/auth/login', AuthController.login)
router.post('/auth/refresh-token', AuthController.refreshToken)

router.post('/auth/test', authentication, authorization(DEFAULT), async (req, res) => res.status(200).send('ok'))

router.post('/collection', CollectionController.createCollection)
router.get('/collection', CollectionController.getListCollection)

export { router as V1 }