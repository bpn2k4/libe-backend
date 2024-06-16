import { PlacementController } from '@controllers'
import { Router } from 'express'

const router = Router()

router.post('/provinces', PlacementController.createProvince)
router.get('/provinces', PlacementController.getProvinces)
router.get('/provinces', PlacementController.getProvince)
router.patch('/provinces', PlacementController.updateProvince)
router.delete('/provinces', PlacementController.deleteProvince)
router.delete('/provinces', PlacementController.deleteProvinces)
router.get('/provinces/:provinceId/districts', PlacementController.getDistrictsInProvince)

router.post('/districts', PlacementController.createDistrict)
router.get('/districts', PlacementController.getProvinces)
router.get('/districts/:districtId/wards', PlacementController.getWardsInDistrict)

router.post('/wards', PlacementController.createWard)


export default router