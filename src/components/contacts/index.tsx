import React from "react";
import {LanguageStrings, TLangDefinition} from "@/types";
import './index.css'
import {LangSwitcher} from "../lang-switcher";
import ContactLink from "../contact-link";

interface ContactsProps {
    lang: TLangDefinition
    strings: LanguageStrings;
    toggleLanguage: () => void
}

export const Contacts: React.FC<ContactsProps> = ({ lang, strings, toggleLanguage }) => {
    return (
<div className="header-4col">
    <div className="col photo">
        <img src="images/avatars/ava.png" alt="Носов Александр" />
        
    </div>
    <div className="col name">
        <h1>{strings.header.title}</h1>
        <p>{strings.header.subtitle} | {strings.header.location}</p>
    </div>
    <div className="col contact">
        <p>
            <ContactLink
                href="mailto:plcgi1@gmail.com"
                icon="📧"
                text="plcgi1"
            />
        </p>

        <p>
            <ContactLink
                href="https://github.com/plcgi1"
                icon="💼"
                text="github.com/plcgi1"
            />
        </p>
        <p>
            <ContactLink
                href="https://linkedin.com/in/alex-nosoff-b768b717"
                icon="🔗"
                text="linkedin.com/in/alex-nosoff-b768b717"
            />
        </p>
        <p>
            <ContactLink
                href="https://telegram.me/plcgi1"
                icon="✈️"
                text="telegram.me/plcgi1"
            />
        </p>
        <p>🟣 teams.microsoft.com/harper.alex</p>
    </div>
    <LangSwitcher lang={lang} toggleLanguage={toggleLanguage}></LangSwitcher>
</div>
    )
}