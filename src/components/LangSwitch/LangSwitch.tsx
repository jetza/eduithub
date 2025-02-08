// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import { useState } from 'react';

const LangSwitch = () => {
    const [language, setLanguage] = useState('sr');

    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => handleLanguageChange('sr')} className={language === 'sr' ? 'active' : ''}>SR</button>
            <button onClick={() => handleLanguageChange('en')} className={language === 'en' ? 'active' : ''}>EN</button>
        </div>
    );
};

export default LangSwitch;