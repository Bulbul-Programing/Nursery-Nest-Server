import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { productService } from './Plant.service';

const getAllProduct = catchAsync(async (req: Request, res: Response) => {
  const query = req.query
  const result = await productService.getAllProductIntoDB(query);

  res.status(200).json({
    success: true,
    massage: 'Product retrieve successfully',
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const {productId} = req.params
  const result = await productService.getSingleProductIntoDB(productId);

  res.status(200).json({
    success: true,
    massage: 'single Product retrieve successfully',
    data: result,
  });
});

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const plantData = req.body;
  const result = await productService.createProductIntoDB(plantData);

  res.status(200).json({
    success: true,
    massage: 'Product create successfully',
    data: result,
  });
});

const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const plantData = req.body;
  const { productId } = req.params;
  const result = await productService.updateProductIntoDB(productId, plantData);

  res.status(200).json({
    success: true,
    massage: 'Product update successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await productService.deleteProductIntoDB(productId);

  res.status(200).json({
    success: true,
    massage: 'Product deleted successfully',
  });
});

export const productController = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getSingleProduct
};
