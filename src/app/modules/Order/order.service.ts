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
      await productModel.findOneAndUpdate(
        { _id: product.id },
        {
          stock: isExistProduct.stock - product.quantity,
          stockStatus: isExistProduct.stock === product.quantity ? 'Out' : 'In',
        },
      );
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

const updateOrderIntoDB = async (
  id: string,
  payload: Partial<TCreateOrder>,
) => {
  const isExistOrder = await OrderModel.findOne({ _id: id });
  if (!isExistOrder) {
    throw new AppError(400, 'This Order is not found!');
  }
  const result = await OrderModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getLastSevenDaysOrderIntoDB = async () => {
  const getLast7Days = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(today);
      day.setDate(today.getDate() - i);
      days.push(day.toISOString().slice(0, 10));
    }

    return days.reverse();
  };

  const today = new Date();
  const sevenDaysAgo = new Date(today);

  sevenDaysAgo.setDate(today.getDate() - 7);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  const endOfToday = new Date(today);

  const orders = await OrderModel.aggregate([
    {
      $match: {
        createdAt: { $gte: sevenDaysAgo, $lte: endOfToday },
      },
    },
    {
      $addFields: {
        day: {
          $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
        },
      },
    },
    {
      $group: {
        _id: '$day',
        totalSales: { $sum: { $toDouble: '$totalPrice' } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ]);
  const last7Days = getLast7Days();

  const result = last7Days.map((day) => {
    const dayData = orders.find((order) => order._id === day);
    return dayData ? dayData : { _id: day, totalSales: 0, count: 0 };
  });
  return result;
};

export const orderService = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  updateOrderIntoDB,
  getLastSevenDaysOrderIntoDB,
};
