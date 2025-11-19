import React from "react";
import {LanguageStrings, TLangDefinition} from "@/types";
import './index.css'
import {LangSwitcher} from "../lang-switcher";
import ContactLink from "../contact-link";
import { SocialIcon } from 'react-social-icons'

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
        <p>
            {strings.header.subtitle} |&nbsp;
            {strings.header.location} |&nbsp;
            {strings.header.phone}: +375 (28) 7537947
        </p>
        <p>
            <ContactLink
                href="https://telegram.me/plcgi1"
                icon={<SocialIcon
                    network={'telegram'}
                    as={'div'}
                    borderRadius='0'
                />
                }
                text="@plcgi1"
            />
            <ContactLink
                href="https://github.com/plcgi1"
                icon={
                    <SocialIcon
                        as={'div'}
                        network='github'
                        borderRadius='0'
                    />
                }
                text={'github.com/plcgi1'}
            />
            <ContactLink
                href="https://linkedin.com/in/alex-nosoff-b768b717"
                icon={<SocialIcon network='linkedin'
                                  as={'div'}
                                  borderRadius='0'
                />
                }
                text="linkedin.com/in/alex-nosoff-b768b717"
            />

        </p>
    </div>
    {/*<div className="col contact">*/}
        {/*<p>*/}
            {/*<ContactLink*/}
                {/*href="https://github.com/plcgi1"*/}
                {/*icon={*/}
                    {/*<SocialIcon*/}
                        {/*as={'div'}*/}
                        {/*network='github'*/}
                        {/*borderRadius='0'*/}
                    {/*/>*/}
                {/*}*/}
                {/*text={'github.com/plcgi1'}*/}
            {/*/>*/}
        {/*</p>*/}
        {/*<p>*/}
            {/*<ContactLink*/}
                {/*href="https://linkedin.com/in/alex-nosoff-b768b717"*/}
                {/*icon={<SocialIcon network='linkedin'*/}
                                  {/*as={'div'}*/}
                                  {/*borderRadius='0'*/}
                {/*/>*/}
                {/*}*/}
                {/*text="linkedin.com/in/alex-nosoff-b768b717"*/}
            {/*/>*/}
        {/*</p>*/}
        {/*<p>*/}
            {/*<ContactLink*/}
                {/*href="https://telegram.me/plcgi1"*/}
                {/*icon={<SocialIcon*/}
                    {/*network={'telegram'}*/}
                    {/*as={'div'}*/}
                    {/*borderRadius='0'*/}
                {/*/>*/}
                {/*}*/}
                {/*text="@plcgi1"*/}
            {/*/>*/}
        {/*</p>*/}
    {/*</div>*/}
    <LangSwitcher lang={lang} toggleLanguage={toggleLanguage}></LangSwitcher>
</div>
    )
}