import AddressController from '../../controllers/Address.js'
import router from './base.js'

router.post('/address/province', AddressController.createProvince)