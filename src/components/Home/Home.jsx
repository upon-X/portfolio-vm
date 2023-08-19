import styles from './Home.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <p className={styles.name}>
                Valentino Micheloni
                <span className={styles.role}>
                    Full Stack Web Developer
                </span>
            </p>
        </div>
    )
}