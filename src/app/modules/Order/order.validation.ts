import { z } from 'zod';

const ProductInfoSchema = z.object({
  id: z.string({
    required_error: 'id is required',
    invalid_type_error: 'id must be a string',
  }),
  maxQuantity: z
    .number({
      required_error: 'max Quantity is required',
      invalid_type_error: 'max Quantity must be a string',
    }),
  quantity: z
    .number({
      required_error: 'quantity is required',
      invalid_type_error: 'quantity must be a string',
    })
});

const CreateOrderValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }),
    address: z.string({
      required_error: 'Address is required',
      invalid_type_error: 'Address must be a string',
    }),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      }).optional(),
    districtName: z.string({
      required_error: 'District is required',
      invalid_type_error: 'District must be a string',
    }),
    phone: z.string({
      required_error: 'Phone is required',
      invalid_type_error: 'Phone must be a string',
    }),
    subdistrict: z.string({
      required_error: 'Sub District is required',
      invalid_type_error: 'Sub District must be a string',
    }),
    totalPrice: z.string({
      required_error: 'Total Price is required',
      invalid_type_error: 'Total Price must be a string',
    }),
    products: z.array(ProductInfoSchema),
  }),
});
const UpdateOrderValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
      invalid_type_error: 'Name must be a string',
    }).optional(),
    address: z.string({
      required_error: 'Address is required',
      invalid_type_error: 'Address must be a string',
    }).optional(),
    email: z
      .string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string',
      }).optional(),
    districtName: z.string({
      required_error: 'District is required',
      invalid_type_error: 'District must be a string',
    }).optional(),
    phone: z.string({
      required_error: 'Phone is required',
      invalid_type_error: 'Phone must be a string',
    }).optional(),
    subdistrict: z.string({
      required_error: 'Sub District is required',
      invalid_type_error: 'Sub District must be a string',
    }).optional(),
    totalPrice: z.string({
      required_error: 'Total Price is required',
      invalid_type_error: 'Total Price must be a string',
    }).optional(),
    products: z.array(ProductInfoSchema).optional(),
  }),
});

export const orderValidation = {
  CreateOrderValidationSchema,
  UpdateOrderValidationSchema
};
