'use client';

import ContactLinks from './components/ContactLinks';
import UserMenu from './components/UserMenu';
import styles from './topbar.module.scss';            

export default function TopBar() {
    return (
        <section className={styles.topbar}>
        <div className="container">
          <div className={styles.topbar__inner}>
            <ContactLinks />
            <UserMenu />
          </div>
        </div>
      </section>
    )
}