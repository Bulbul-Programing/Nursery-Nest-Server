import AppError from '../../error/AppError';
import { productModel } from '../Plant/Plant.model';
import { TCreateOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (payload: TCreateOrder) => {
  const result = OrderModel.create(payload);
  return result;
};

const getAllOrderIntoDB = async () => {
  const result = OrderModel.find().sort('-createdAt').populate({
    path: 'products',
    populate: {
      path: 'id',
    },
  });
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
};
