'use client';

import styles from './error-message.module.scss';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className={styles.error}>
      <div className={styles.error__inner}>
        <h2 className={styles.error__title}>Error</h2>
        <p className={styles.error__text}>{message}</p>
        <button
          className={styles.error__button}
          onClick={() => window.location.reload()}
        >
          Repeat the request
        </button>
      </div>
    </div>
  );
}
