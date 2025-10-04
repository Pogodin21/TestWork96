import Image from 'next/image';
import styles from '../Topbar.module.scss';

export default function ContactLinks() {
  return (
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
  );
}
