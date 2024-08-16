import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';
import { productModel } from '../Plant/Plant.model';
import { orderSearchAbleFelid } from './order.const';
import { TCreateOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (payload: TCreateOrder) => {
  await Promise.all(
    payload.products.map(async (product) => {
      const isExistProduct = await productModel.findById(product.id);
      if (!isExistProduct) {
        throw new AppError(404, 'Product not found');
      }
      if (product.quantity > isExistProduct.stock) {
        throw new AppError(500, 'Product stock is less than your quantity!');
      }
      await productModel.findOneAndUpdate({_id : product.id}, {stock : isExistProduct.stock - product.quantity, stockStatus : isExistProduct.stock === product.quantity ? 'Out' : 'In'})
    }),
  );
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
