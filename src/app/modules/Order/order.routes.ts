import express from 'express';
import { orderValidation } from './order.validation';
import { orderController } from './order.controller';
import validateRequest from '../../middleware/validateRequestData';

const router = express.Router()

router.post('/create-order', validateRequest(orderValidation.CreateOrderValidationSchema), orderController.createOrder)
router.get('/', orderController.getAllOrder)

export const orderRouter = router