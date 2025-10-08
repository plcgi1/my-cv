import React from 'react';
import './index.css';
import * as p from '../../../package.json'

interface FooterProps {
    showLinks?: boolean;
    variant?: 'default' | 'minimal' | 'dark';
}

export const Footer: React.FC<FooterProps> = ({
                                           showLinks = true,
                                           variant = 'default'
                                       }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className={`footer footer-${variant}`}>
            <div className="footer-container">
                <div className="footer-main">
                    <p>
                        &copy; {currentYear} plcgi1.
                        {variant === 'default' && ' Все права защищены.'}
                    </p>

                </div>
                {p.version}
                {showLinks && variant === 'default' && (
                    <div className="footer-actions">
                        <button
                            className="footer-btn"
                            onClick={() => window.print()}
                        >
                            🖨️ Версия для печати
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;