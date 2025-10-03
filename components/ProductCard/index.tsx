import styles from './product-сard.module.scss';

export default function ProductCard() {
    return (
        <article className={styles.product}>
          <div className={styles.product__image}>
            <img src="" alt="Изображение товара" />
          </div>
          <div className={styles.product__info}>
            <h3 className={styles.product__name}>Назвение продукта</h3>
            <p className={styles.product__category}>КАТЕГОРИЯ</p>
            <p className={styles.product__price}>$9.99</p>
          </div>
        </article>
    )
}