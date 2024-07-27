import { query } from 'express';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';
import { courseSearchAbleFields } from './Plant.const';
import { TCreateProduct } from './Plant.interface';
import { productModel } from './Plant.model';

const getAllProductIntoDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(productModel.find(), query)
    .searching(courseSearchAbleFields)
    .filter()
    .sort()
    .paginate()
    .fields()
    .priceFilter()
  const result = await courseQuery.modelQuery;
  return result;
};

const getProduceCountIntoDB = async()=>{
  const result = await productModel.estimatedDocumentCount()
  return result
}

const createProductIntoDB = async (payload: TCreateProduct) => {
  const result = await productModel.create(payload);
  return result;
};

const deleteProductIntoDB = async (id: string) => {
  const isExistProduct = await productModel.findOne({ _id: id });
  if (!isExistProduct) {
    throw new AppError(400, 'This product is not found!');
  }

  const result = await productModel.deleteOne({ _id: id });
  return result;
};

const updateProductIntoDB = async (
  id: string,
  payload: Partial<TCreateProduct>,
) => {
  const isExistProduct = await productModel.findOne({ _id: id });
  if (!isExistProduct) {
    throw new AppError(400, 'This product is not found!');
  }
  const result = await productModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const getSingleProductIntoDB = async (id: string) => {
  const result = await productModel.findById(id);
  return result;
};

export const productService = {
  getAllProductIntoDB,
  getProduceCountIntoDB,
  createProductIntoDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  getSingleProductIntoDB,
};
