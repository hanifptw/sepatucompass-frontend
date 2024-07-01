export type Order = {
  id: string;
  userId: string | null;
  status: string;
  
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  imageURL: string;
  price: number;
  description: string;
  sizes: string[];

  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  id: string;
  username: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;
};

export type OrderItem = {
    id: string;
    productId: string;
    quantity: number;
    orderId: string | null;

    createdAt: Date;
    updatedAt: Date;
}