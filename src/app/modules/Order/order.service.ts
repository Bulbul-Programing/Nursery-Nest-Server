import QueryBuilder from '../../builder/QueryBuilder';
import { orderSearchAbleFelid } from './order.const';
import { TCreateOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (payload: TCreateOrder) => {
  const result = OrderModel.create(payload);
  return result;
};

const getAllOrderIntoDB = async (query: Record<string, unknown>) => {
  const orderQuery = new QueryBuilder(
    OrderModel.find().populate({
      path: 'products',
      populate: {
        path: 'id',
      },
    }),
    query,
  )
    .searching(orderSearchAbleFelid)
    .sort()
    .filter()
    .paginate()
    .fields()
    .priceFilter();
  const result = await orderQuery.modelQuery;
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
};
