'use client';

import styles from './login.module.scss';

export default function Login() {
  return (
    <section className={styles.login}>
      <div className='container'>
          <h2 className={styles.login__title}>Login</h2>
          <form className={styles.login__form}>
            <div className={styles.login__field}>
              <input type="text" className={styles.login__input} placeholder="Username" />
            </div>
    
            <div className={styles.login__field}>
              <input type="password" className={styles.login__input} placeholder="Password" />
            </div>
    
            <button className={styles.login__button}>Login</button>
          </form>
      </div>
    </section>
  );
}
