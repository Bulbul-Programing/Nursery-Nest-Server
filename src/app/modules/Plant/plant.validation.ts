import { z } from 'zod';

const createPlaneValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Product name is required',
      invalid_type_error: 'Product name must be a string',
    }),
    description: z.string({
      required_error: 'Description name is required',
      invalid_type_error: 'Description name must be a string',
    }),
    price: z.number({
      required_error: 'price name is required',
      invalid_type_error: 'price name must be a Number',
    }),
    stock: z.number({
      required_error: 'stock name is required',
      invalid_type_error: 'stock name must be a number',
    }),
    category: z.string({
      required_error: 'Category name is required',
      invalid_type_error: 'Category name must be a string',
    }),
    images : z.array(z.string()),
    rating: z.number({
      required_error: 'rating is required',
      invalid_type_error: 'rating must be a Number',
    })
  }),
});
const updatePlaneValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Product name is required',
      invalid_type_error: 'Product name must be a string',
    }).optional(),
    description: z.string({
      required_error: 'Description name is required',
      invalid_type_error: 'Description name must be a string',
    }).optional(),
    price: z.number({
      required_error: 'price name is required',
      invalid_type_error: 'price name must be a Number',
    }).optional(),
    stock: z.number({
      required_error: 'stock name is required',
      invalid_type_error: 'stock name must be a number',
    }).optional(),
    category: z.string({
      required_error: 'Category name is required',
      invalid_type_error: 'Category name must be a string',
    }).optional(),
    images : z.array(z.string()).optional(),
    rating: z.number({
      required_error: 'rating is required',
      invalid_type_error: 'rating must be a Number',
    }).optional()
  }),
});

export const createProductValidation = {
    createPlaneValidationSchema,
    updatePlaneValidationSchema
}
