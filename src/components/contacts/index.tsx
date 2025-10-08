import React from "react";
import {LanguageStrings, TLangDefinition} from "@/types";
import './index.css'
import {LangSwitcher} from "../lang-switcher";

interface ContactsProps {
    lang: TLangDefinition
    strings: LanguageStrings;
    toggleLanguage: () => void
}

export const Contacts: React.FC<ContactsProps> = ({ lang, strings, toggleLanguage }) => {
    return (
<div className="header-4col">
    <div className="col photo">
        <img src="/images/avatars/ava.png" alt="Носов Александр" />
        
    </div>
    <div className="col name">
        <h1>{strings.header.title}</h1>
        <p>{strings.header.subtitle} | {strings.header.location}</p>
    </div>
    <div className="col contact">
        <p>📧 plcgi1@gmail.com</p>
        <p>🌐 ivan-nosov.dev</p>
        <p>💼 github.com/plcgi1</p>
        <p>🔗 linkedin.com/in/alex-nosoff-b768b717</p>
        <p>✈️ telegram.me/plcgi1</p>
        <p>🟣 teams.microsoft.com/harper.alex</p>
    </div>
    <LangSwitcher lang={lang} toggleLanguage={toggleLanguage}></LangSwitcher>
</div>
    )
}