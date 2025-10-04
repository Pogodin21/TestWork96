import { api } from './axios';
import type { LoginPayload, User, ProductsResponse } from './types';

// Авторизация
export async function loginUser(payload: LoginPayload): Promise<User> {
  const { data } = await api.post<User>('/auth/login', payload);
  return data;
}

// Получение списка товаров
export async function fetchProducts(limit = 12): Promise<ProductsResponse> {
  const select = ['id', 'title', 'price', 'category', 'thumbnail'].join(',');
  const { data } = await api.get<ProductsResponse>('/products', {
    params: { limit, select },
  });
  return data;
}
