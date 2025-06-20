export interface Product {
  _id?: string;
  title: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}
