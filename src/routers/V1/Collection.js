import router from './base.js'
import { CollectionController } from '../../controllers/Collection.js'

router.get('/collection', CollectionController.getListCollection)
router.post('/collection', CollectionController.createCollection)
router.patch('/collection', CollectionController.updateCollection)
router.delete('/collection', CollectionController.deleteListCollection)

router.get('/collection/:collectionId', CollectionController.getOneCollection)
router.get('/collection/:collectionId/product', CollectionController.getOneCollection)