import express from 'express';
import { orderValidation } from './order.validation';
import { orderController } from './order.controller';
import validateRequest from '../../middleware/validateRequestData';

const router = express.Router()

router.post('/create-order', validateRequest(orderValidation.CreateOrderValidationSchema), orderController.createOrder)
router.get('/', orderController.getAllOrder)
router.patch('/:id', validateRequest(orderValidation.UpdateOrderValidationSchema), orderController.updateOrder)

export const orderRouter = router