import { model, Schema } from 'mongoose';
import { TCreateOrder, TProductInfo } from './order.interface';

const productInfo = new Schema<TProductInfo>({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'product',
  },
  maxQuantity: { type: Number, required: true },
  quantity: { type: Number, required: true },
}, { _id : false });

const createOrderSchema = new Schema<TCreateOrder>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String},
  districtName: { type: String, required: true },
  phone: { type: String, required: true },
  subdistrict: { type: String, required: true },
  totalPrice: { type: String, required: true },
  products: { type: [productInfo], required: true },
});

export const OrderModel = model<TCreateOrder>('order', createOrderSchema);
