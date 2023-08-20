import React, { useState } from 'react';

export default function LanguageSwitcher({ onChangeLanguage }) {
    const [language, setLanguage] = useState('en');

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'es' : 'en';
        setLanguage(newLanguage);
        onChangeLanguage(newLanguage);
    };

    return (
        <div>
            <button onClick={toggleLanguage}>{language === 'en' ? 'A español' : 'To english'}</button>
        </div>
    );
}
