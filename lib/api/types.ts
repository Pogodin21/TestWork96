export type LoginPayload = {
  username: string;
  password: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  image?: string;
  token: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
