import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.ico'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.limit_navbar}>
                <div className={styles.logo}>
                    <Link to='/'><img className={styles.logo_img} src={logo} alt="logo" /></Link>
                </div>
                <div className={styles.links}>
                    <Link to='/projects' className={styles.link_projects}>Projects</Link>
                    <Link to='/contact' className={styles.link_contact}>Contact</Link>
                </div>
            </div>
        </div>
    )
}