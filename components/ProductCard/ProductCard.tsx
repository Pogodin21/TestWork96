import styles from './product-сard.module.scss';
import { Product } from '@/lib/api/types';
import { useAuthStore } from '@/store/auth';
import Image from 'next/image';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { user } = useAuthStore();
  const { title, price, category, thumbnail } = product;

  return (
    <article
      className={styles.product}
    >
      <div className={styles.product__image}>
        <Image
          src={thumbnail}
          alt={title}
          fill
          className={styles.product__imageItem}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 300px"
        />
      </div>
      <div className={styles.product__info}>
        <h3 className={styles.product__name}>{title}</h3>
        <p className={styles.product__category}>{category.toUpperCase()}</p>
        <p className={styles.product__price}>{`$${price}`}</p>
      </div>
      {user && <button className={styles.product__addBtn}>Add to cart</button>}
    </article>
  );
}
