import Link from 'next/link';
import styles from './menu.module.scss';

interface MenuItem {
  name: string;
  href: string;
}


const MENU_ITEMS: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Hot Deals', href: '/deals' },
  { name: 'Categories', href: '/categories' },
  { name: 'Laptops', href: '/laptops' },
  { name: 'Smartphones', href: '/smartphones' },
  { name: 'Cameras', href: '/cameras' },
  { name: 'Accessories', href: '/accessories' },
];

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <div className="container">
        <ul className={styles.menu__list}>
          {MENU_ITEMS.map((item) => (
            <Link className={styles.menu__link} href={item.href} key={item.name}>
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
