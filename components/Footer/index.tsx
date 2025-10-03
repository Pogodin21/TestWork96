import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__inner}>
                    <p>2025 год</p>
                </div>
            </div>
        </footer>
    )
}