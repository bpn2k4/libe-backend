import { Router } from 'express'

import {
  CollectionController,
  ColorController,
  PlacementController
} from '@controllers'

const router = Router()

router.post('/colors', ColorController.createColor)
router.get('/colors', ColorController.getColors)
router.get('/colors/:colorId', ColorController.getColor)
router.patch('/colors/:colorId', ColorController.updateColor)
router.delete('/colors/:colorId', ColorController.deleteColor)
router.delete('/colors', ColorController.deleteColors)

router.get('/provinces/:provinceId/districts', PlacementController.getDistrictsInProvince)
router.get('/provinces/:provinceId', PlacementController.getProvince)
router.patch('/provinces/:provinceId', PlacementController.updateProvince)
router.delete('/provinces/:provinceId', PlacementController.deleteProvince)
router.post('/provinces', PlacementController.createProvince)
router.get('/provinces', PlacementController.getProvinces)
router.delete('/provinces', PlacementController.deleteProvinces)

router.post('/districts', PlacementController.createDistrict)
router.get('/districts', PlacementController.getProvinces)
router.get('/districts/:districtId/wards', PlacementController.getWardsInDistrict)

router.post('/wards', PlacementController.createWard)

router.get('/collections', CollectionController.getCollections)
router.post('/collections', CollectionController.createCollection)
router.get('/collections/:collectionId', CollectionController.getCollection)
router.patch('/collections/:collectionId', CollectionController.updateCollection)
router.delete('/collections/:collectionId', CollectionController.deleteCollection)
router.delete('/collections', CollectionController.deleteCollections)

export default router