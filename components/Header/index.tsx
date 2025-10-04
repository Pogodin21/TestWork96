'use client';

import Link from 'next/link';
import styles from './header.module.scss';
import { useAuthStore } from '@/store/auth';
import Image from 'next/image';

export default function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className="container">
          <div className={styles.topbar__inner}>
            <div className={styles.topbar__left}>
              <a href="tel:+021955184" className={styles.topbar__link}>
                <Image
                  src="/icons/phone.png"
                  alt="Phone"
                  width={20}
                  height={20}
                  className={styles.topbar__icon}
                />
                +021 95-51-84
              </a>

              <a href="mailto:shop@abelohost.com" className={styles.topbar__link}>
                <Image
                  src="/icons/mail.png"
                  alt="Email"
                  width={20}
                  height={20}
                  className={styles.topbar__icon}
                />
                shop@abelohost.com
              </a>

              <a
                href="https://maps.app.goo.gl/AT2xC49X5oqUkCL19"
                target="_blank"
                rel="noreferrer"
                className={styles.topbar__link}
              >
                <Image
                  src="/icons/map.png"
                  alt="Location"
                  width={20}
                  height={20}
                  className={styles.topbar__icon}
                />
                1734 Stonecoal Road
              </a>
            </div>
            <div className={styles.topbar__right}>
              {!user ? (
                <Link href="/login" className={styles.login}>
                  <Image
                    src="/icons/user.png"
                    alt="User icon"
                    width={20}
                    height={206}
                    className={styles.login__icon}
                  />
                  login
                </Link>
              ) : (
                <div className={styles.user}>
                  <span className={styles.user__name}>
                    {user.firstName} {user.lastName}
                  </span>

                  <Image
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
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.branding}>
        <div className="container">
          <div className={styles.branding__inner}>
            <h1 className={styles.branding__logo}>Abelohost Shop.</h1>
            <div className={styles.branding__banner}>600 x 70</div>
          </div>
        </div>
      </div>

      <nav className={styles.menu}>
        <div className="container">
          <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/">
                Home
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/deals">
                Hot Deals
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/categories">
                Categories
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/laptops">
                Laptops
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/smartphones">
                Smartphones
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/cameras">
                Cameras
              </Link>
            </li>
            <li className={styles.menu__item}>
              <Link className={styles.menu__link} href="/accessories">
                Accessories
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
