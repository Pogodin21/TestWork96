'use client';
import { useEffect } from 'react';
import { useProductsStore } from '@/store/products';
import styles from './page.module.scss';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  const { items, loading, error, loadProducts } = useProductsStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__inner}>
          <h2>Название категории</h2>
          <div className={styles.cards}>
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
