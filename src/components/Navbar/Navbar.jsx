import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                VM
            </div>
            <div className={styles.links}>
                <Link to='/projects' className={styles.link_projects}>Projects</Link>
                <Link to='/projects' className={styles.link_contact}>Contacto</Link>
            </div>
        </div>
    )
}