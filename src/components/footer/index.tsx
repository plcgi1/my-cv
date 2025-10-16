import React from 'react';
import ContactLink from '../contact-link'
import './index.css';
import * as p from '../../../package.json'
import { LanguageStrings } from '../..//types'

interface FooterProps {
    strings: LanguageStrings;
}
export const Footer: React.FC<FooterProps> = ({ strings }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`footer footer-default`}>
            <div className="footer-container">
                <div className="footer-main">
                    <p>
                        &copy; {currentYear} plcgi1.
                        {strings.footer.copyright}
                    </p>

                </div>
                <div>
                    <ContactLink
                        href="https://plcgi1.github.io/my-cv/"
                        icon="🌐"
                        text="plcgi1.github.io/my-cv"
                    />
                </div>
                {p.version}
                <div className="footer-actions">
                    <button
                        className="footer-btn"
                        onClick={() => window.print()}
                    >
                        {strings.footer.printVersion}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;