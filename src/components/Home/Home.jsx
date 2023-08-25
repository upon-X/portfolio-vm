import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom'

export default function Home() {
    // 
    return (
        <div className={styles.home}>
            <div className={styles.title}>
                <p className={styles.name}>
                    Valentino Micheloni
                </p>
                <p className={styles.role}>
                    Full Stack Web Developer
                </p>
            </div>
            <div>
                <p className={styles.description}>
                    Welcome to my portfolio. You can see and interact with my
                    <Link to='/projects' className={styles.toprojects}> projects </Link>
                    or talk to me through my
                    <Link to='/contact' className={styles.tocontact}> contact networks </Link>
                </p>
            </div>
            <div>
            </div>
        </div>
    )
}