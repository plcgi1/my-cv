import React from 'react';
import './App.css';
import { useLanguage } from './hooks/useLanguage';
import { useResumeData } from './hooks/useResumeData';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import enStrings from './locales/en.json';
import ruStrings from './locales/ru.json';
import { LanguageStrings } from './types';
import { Layout } from 'antd';
import {MySider } from './components/Sider'

const { Sider } = Layout;


const siderStyle: React.CSSProperties = {
    // textAlign: 'center',
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

function App() {
    const { language, toggleLanguage } = useLanguage();
    const { skills, experience, error } = useResumeData(language);

    const strings: LanguageStrings = language === 'en' ? enStrings : ruStrings;

    const contactInfo = {
        email: language === 'en' ? 'john.doe@email.com' : 'ivan.ivanov@email.com',
        phone: language === 'en' ? '+1 (555) 123-4567' : '+7 (999) 123-45-67',
        location: language === 'en' ? 'New York, USA' : 'Москва, Россия'
    };

    if (error) {
        return (
            <div className="app">
                <div className="error-page">
                    <h1>Error</h1>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <Layout>
            <Sider width="25%" style={siderStyle}>
                <MySider strings={strings} skills={skills}></MySider>
            </Sider>
            <Layout>
                <Header
                    strings={strings}
                    onLanguageToggle={toggleLanguage}
                    currentLanguage={language}
                />

                <div className="container">
                    <Skills
                        strings={strings}
                        skills={skills}
                    />

                    <Experience
                        strings={strings}
                        experiences={experience}
                    />

                    <section className="contact-section">
                        <h2>{strings.contact.title}</h2>
                        <div className="contact-info">
                            <p>📧 {contactInfo.email}</p>
                            <p>📞 {contactInfo.phone}</p>
                            <p>📍 {contactInfo.location}</p>
                        </div>
                    </section>
                </div>
            </Layout>
        </Layout>
    );
}

export default App;