export type TCreateProduct = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images : string[],
  rating ?: number,
  stockStatus ?: 'In' | 'Out'
};
