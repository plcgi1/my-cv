import React from 'react';
import ContactLink from '../contact-link'
import './index.css';
import * as p from '../../../package.json'
import { LanguageStrings } from '../..//types'
import { SocialIcon } from 'react-social-icons'

interface FooterProps {
    strings: LanguageStrings;
}
export const Footer: React.FC<FooterProps> = ({ strings }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`footer footer-default no-print`}>
            <div className="footer-container">
                <div className="footer-main">
                    <p>
                        &copy; {currentYear} plcgi1.
                        {strings.footerCopyright}
                    </p>

                </div>
                <div>
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
                </div>
                {p.version}
                <div className="footer-actions">
                    <button
                        className="footer-btn"
                        onClick={() => window.print()}
                    >
                        {strings.footerPrintVersion}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;