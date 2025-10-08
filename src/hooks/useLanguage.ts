import { useState, useEffect } from 'react';
import { TLangDefinition } from '@/types'

let defaultLang: TLangDefinition = 'en'

export const useLanguage = () => {
    const userLang = navigator.language;
    const [lang] = userLang.split('-');

    if (/en|ru/.test(lang)) {
        defaultLang = lang as TLangDefinition
    }

    const [language, setLanguage] = useState<TLangDefinition>(defaultLang);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ru' : 'en');
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('resume-language') as TLangDefinition;
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('resume-language', language);
    }, [language]);

    return {
        language,
        toggleLanguage
    };
};