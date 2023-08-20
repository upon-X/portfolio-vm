import React, { useState } from 'react';
import styles from './Home.module.css';
import ChangeLanguage from '../ChangeLanguage';

export default function Home() {
    const [language, setLanguage] = useState('en');

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const descriptionText = language === 'en'
        ? `Welcome to my portfolio. You can see and interact with my projects`
        : `Bienvenido a mi portafolio. Puedes ver e interactuar con mis proyectos`;

    // I'm a Full Stack Web Developer with a passion for building beautiful, responsive, and scalable applications. I'm passionate about building beautiful, responsive, and scalable applications.
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
                    {descriptionText}
                </p>
            </div>
            <div>
                <ChangeLanguage onChangeLanguage={handleChangeLanguage} />
            </div>
        </div>
    )
}