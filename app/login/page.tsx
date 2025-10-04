'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth';
import styles from './login.module.scss';

export default function Login() {
  const router = useRouter();
  const { login, error, loading } = useAuthStore();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isValid = username.trim().length >= 3 && password.trim().length >= 3;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid) return;

    try {
      await login({ username, password });
      router.push('/');
    } catch {
      // Ошибку стор уже записывает сам
    }
  }

  return (
    <section className={styles.login}>
      <div className="container">
        <h2 className={styles.login__title}>Login</h2>
        <form className={styles.login__form} onSubmit={handleSubmit}>
                  {/* РЕВ: поле вынести в отдельный компонент  мемоизировать его  
                  (значит колбэки, входящие в него тоже мемоизирвать)*/}

          <div className={styles.login__field}>
            <input
              type="text"
              className={styles.login__input}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // РЕВ: Тройку вынести в константу вне компонета.
              //  Не должно быть магических чисел в коде (кто-то посмотрит и не поймёт откуда оно вообще)
              minLength={3}
              required
            />
          </div>
        {/* РЕВ:_variables.scss поле вынести в отдельный компонент  мемоизировать его 
        (значит колбэки, входящие в него тоже мемоизирвать) */}

          <div className={styles.login__field}>
            <input
              type="password"
              className={styles.login__input}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // РЕВ: тут тоже тройку убрать в константу
              minLength={3}
              required
            />
          </div>

          {error && <p className={styles.login__error}>{error}</p>}
          {/* // РЕВ: type="submit" добавить к кнопке */}
          <button className={styles.login__button}>{loading ? 'Loading…' : 'Login'}</button>
        </form>
      </div>
    </section>
  );
}
