import styles from './Footer.module.css'

export default function Footer() {
    const fechaActual = new Date();
    const yearActual = fechaActual.getFullYear();
    return (
        <div className={styles.footer}>
            Valentino Micheloni {yearActual}
        </div>
    )
}