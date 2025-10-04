'use client';

import styles from './header.module.scss';
import TopBar from './TopBar/TopBar';
import Branding from './Branding/Branding';
import Menu from './Menu/Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <TopBar/>
      <Branding />
      <Menu /> 
    </header>
  );
}
