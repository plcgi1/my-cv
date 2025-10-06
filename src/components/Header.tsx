import React from 'react';
import { LanguageStrings } from '../types';

interface HeaderProps {
  strings: LanguageStrings;
  onLanguageToggle: () => void;
  currentLanguage: 'en' | 'ru';
}

const Header: React.FC<HeaderProps> = ({ strings, onLanguageToggle, currentLanguage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <button className="language-toggle" onClick={onLanguageToggle}>
          {currentLanguage === 'en' ? 'RU' : 'EN'}
        </button>
        
        <h1 className="name">{strings.header.title}</h1>
        <p className="subtitle">{strings.header.subtitle}</p>
        
        <button className="download-btn">
          {strings.header.downloadCV}
        </button>
      </div>
    </header>
  );
};

export default Header;
