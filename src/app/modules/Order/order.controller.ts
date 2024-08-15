import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { orderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const orderInfo = req.body;
  const result = await orderService.createOrderIntoDB(orderInfo);

  res.status(200).json({
    success: true,
    massage: 'Order created successfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req: Request, res: Response) => {
  const query = req.query
  const result = await orderService.getAllOrderIntoDB(query);

  res.status(200).json({
    success: false,
    massage: 'Order retrieve successfully',
    data: result,
  });
});


export const orderController = {
    createOrder,
    getAllOrder
}