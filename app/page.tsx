'use client';
import styles from './page.module.scss';
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.section__inner}>
          <h2>Название категории</h2>
          <div className={styles.cards}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
    </section>
  );
}
