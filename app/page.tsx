'use client';
import { useEffect } from 'react';
import { useProductsStore } from '@/store/products';
import styles from './page.module.scss';
import ProductCard from '@/components/ProductCard';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';

export default function HomePage() {
  const { items, loading, error, loadProducts } = useProductsStore();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__inner}>
          <h2>Latest Products</h2>
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
