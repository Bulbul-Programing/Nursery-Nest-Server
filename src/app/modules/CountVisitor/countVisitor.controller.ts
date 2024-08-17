import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

const updateOrder = catchAsync(async (req: Request, res: Response) => {
//   const data = req.body;
//   const id = req.params.id;
//   const result = await orderService.updateOrderIntoDB(id, data);

//   res.status(200).json({
//     success: false,
//     massage: 'Order Update successfully',
//     data: result,
//   });
});

export const orderController = {
    updateOrder,
}