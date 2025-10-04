import { useAuthStore } from '@/store/auth';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../topbar.module.scss';

export default function UserMenu() {
  const { user, logout } = useAuthStore();
  return (
    <div className={styles.topbar__right}>
      {/* // РЕВ: перевернуть условие */}
      {user ? (
        <div className={styles.user}>
          <span className={styles.user__name}>
            {user.firstName} {user.lastName}
          </span>
            <Image
              // РЕВ в константу вынести src
              src="/icons/user.png"
              alt="User icon"
              width={20}
              height={20}
              className={styles.user__icon}
            />
          <button onClick={logout} className={styles.user__logout} type="button">
            Logout
          </button>
        </div>
      ) : (
        <Link href="/login" className={styles.login}>
          <Image
          // РЕВ в константу вынести src
            src="/icons/user.png"
            alt="User icon"
            width={20}
            height={20}
            className={styles.login__icon}
          />
          login
        </Link>
      )}
    </div>
  );
}
