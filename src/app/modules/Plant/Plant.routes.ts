import express from 'express';   
import validateRequest from '../../middleware/validateRequestData';
import { createProductValidation } from './plant.validation';
import { productController } from './Plant.controller';

const router = express.Router()

router.get('/', productController.getAllProduct)
router.post('/priceFilter', productController.priceFilter)
router.get('/:productId', productController.getSingleProduct)
router.post('/', validateRequest(createProductValidation.createPlaneValidationSchema), productController.createProduct )
router.patch('/:productId', validateRequest(createProductValidation.updatePlaneValidationSchema), productController.updateProduct )
router.delete('/:productId', productController.deleteProduct)

export const PlantRouter = router