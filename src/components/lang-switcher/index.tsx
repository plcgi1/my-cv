import React from "react";
import {TLangDefinition} from "@/types";
import './index.css'

interface LangSwitcherProps {
    lang: TLangDefinition
    toggleLanguage: () => void
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ lang, toggleLanguage }) => {
    return (
        <div className="col contact-lang">
            <button
                className="lang-btn compact"
                onClick={toggleLanguage}
                title={lang === 'ru' ? 'Switch to English' : 'Переключить на русский'}
            >
                <span className="flag">{lang === 'en' ? '🇷🇺' : '🇺🇸'}</span>
                <span className="lang-code">{lang === 'ru' ? 'EN' : 'RU'}</span>
            </button>
        </div>
    )
}