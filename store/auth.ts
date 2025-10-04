'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginUser } from '@/lib/api/dummyjson';
import type { User, LoginPayload } from '@/lib/api/types';
import { AxiosError } from 'axios';

type AuthState = {
  user: Omit<User, 'token'> | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (payload: LoginPayload) => Promise<void>;  
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      loading: false,
      error: null,
      email: null,

      async login(payload) {
        try {
          set({ loading: true, error: null });
          const data = await loginUser(payload);
          const { token, ...user } = data;
          set({ token, user, loading: false });
        } catch (error: unknown) {
          let message = 'Произошла ошибка при запросе.';
          if (error instanceof AxiosError) {
            message = 'Ошибка при авторизации. Проверьте логин или пароль.';
          }
          set({ error: message, loading: false });
          throw new Error(message);
        }
      },

      logout() {
        set({ user: null, token: null });
        
      },
    }),
    { name: 'auth-store' },
  ),
);
