import styles from './Branding.module.scss';
const BANNER_LABEL = '600 x 70';

interface BrandingProps {
  bannerLabel?: string;
}

export default function Branding({bannerLabel = BANNER_LABEL}: BrandingProps) {
    return (
        <div className={styles.branding}>
        <div className="container">
          <div className={styles.branding__inner}>
            <h1 className={styles.branding__logo}>
              Abelohost Shop<span className={styles.branding__dot}>.</span>
            </h1>
            <div className={styles.branding__banner}>{bannerLabel}</div>
          </div>
        </div>
      </div>
    )
}