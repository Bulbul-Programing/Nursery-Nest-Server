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
    success: true,
    massage: 'Order retrieve successfully',
    data: result,
  });
});

const updateOrder = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const id = req.params.id
  const result = await orderService.updateOrderIntoDB(id, data);

  res.status(200).json({
    success: false,
    massage: 'Order Update successfully',
    data: result,
  });
});

const getLastSevenDaysOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await orderService.getLastSevenDaysOrderIntoDB();
  res.status(200).json({
    success: true,
    massage: 'last seven days order retrieve successfully',
    data: result,
  });
});


export const orderController = {
    createOrder,
    getAllOrder,
    updateOrder,
    getLastSevenDaysOrder
}