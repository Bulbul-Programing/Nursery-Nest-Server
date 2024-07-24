import { model, Schema } from 'mongoose';
import { TCreateProduct } from './Plant.interface';

const createProductSchema = new Schema<TCreateProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
  rating : {type : Number, required : true, max : 5}
},{timestamps : true});

export const productModel = model<TCreateProduct>(
  'product',
  createProductSchema,
);
