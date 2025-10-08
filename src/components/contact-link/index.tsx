import React from 'react';
import './index.css'

interface ContactLinkProps {
    href: string;
    icon: string;
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
                <span className="contact-icon">{icon}</span>
                <span className="contact-text">{text}</span>
            </a>
        </div>
    );
};

export default ContactLink;