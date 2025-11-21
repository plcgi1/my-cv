import React from "react";
import {LanguageStrings} from "@/types";
import './index.css'
import ContactLink from "../contact-link";
import { SocialIcon } from 'react-social-icons'

interface ContactsProps {
    strings: LanguageStrings;
}

export const Contacts: React.FC<ContactsProps> = ({ strings }) => {
    return (
<div className="header-2col">
    <div className="col photo">
        <img src="images/avatars/ava.png" alt="Носов Александр" />
    </div>
    <div className="col name">
        <h1>{strings.headerTitle}</h1>
        <p>
            {strings.headerSubtitle} |&nbsp;
            {strings.headerLocation} |&nbsp;
            {strings.headerPhone}: +375 (28) 7537947
        </p>
        <div>
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
                text={'plcgi1'}
            />
            <ContactLink
                href="https://linkedin.com/in/alex-nosoff-b768b717"
                icon={<SocialIcon network='linkedin'
                                  as={'div'}
                                  borderRadius='0'
                />
                }
                text="alex-nosoff"
            />

        </div>
    </div>

</div>
    )
}