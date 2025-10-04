'use client';

import { useAuthStore } from '@/store/auth';
import styles from './footer.module.scss';

export default function Footer() {
    const date = new Date().getFullYear();
    const { user } = useAuthStore();
    
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__inner}>
                    <p>{date}</p>
                    {user && <p>Logged as {user.email}</p>}
                </div>
            </div>
        </footer>
    )
}