import React from 'react';
import './index.css'
import { SocialIcon } from 'react-social-icons'

interface ContactLinkProps {
    href: string;
    icon: SocialIcon;
    text: string;
    isExternal?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({
                                                     href,
                                                     icon,
                                                     text,
                                                     isExternal = true
                                                 }) => {
    return (
        <div className="contact-link">
            <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
            >
                {icon}
                <span className="contact-text">{text}</span>
            </a>
        </div>
    );
};

export default ContactLink;