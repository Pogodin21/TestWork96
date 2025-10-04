'use client';

import { create } from 'zustand';
import { fetchProducts } from '@/lib/api/dummyjson';
import type { Product } from '@/lib/api/types';

type ProductsState = {
  items: Product[];
  loading: boolean;
  error: string | null;
  loadProducts: () => Promise<void>;
};

export const useProductsStore = create<ProductsState>((set) => ({
  items: [],
  loading: false,
  error: null,

  async loadProducts() {
    try {
      set({ loading: true, error: null });
      // РЕВ: 12 в константу вынести
      const data = await fetchProducts(12);
      set({ items: data.products, loading: false });
    } catch {
      set({
        error: 'Не удалось загрузить товары. Попробуйте позже.',
        loading: false,
      });
    }
  },
}));
