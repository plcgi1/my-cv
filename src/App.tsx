// import React from 'react';
import './App.css';
import { useLanguage } from './hooks/useLanguage';
import { useResumeData } from './hooks/useResumeData';
import { Skills } from './components/skills';
import enStrings from './locales/en.json';
import ruStrings from './locales/ru.json';
import {Contacts} from "./components/contacts";
import {Target} from "./components/target";
import {Experience} from './components/experience'
import { Footer } from './components/footer'
import {LangSwitcher} from "./components/lang-switcher";

function App() {
    const { language, toggleLanguage } = useLanguage();
    const { skills, experience, error } = useResumeData(language);
    const strings = language === 'en' ? enStrings : ruStrings

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

        <div>
            <section>
                <LangSwitcher lang={language} toggleLanguage={toggleLanguage}></LangSwitcher>
            </section>
            <section>
                <Contacts strings={strings}></Contacts>
            </section>
            <section>
                <Target strings={strings}></Target>
            </section>
            <section>
                <Skills strings={strings} skills={skills}></Skills>
            </section>
            <section className="experience-section">
                <Experience strings={strings} experiences={experience}></Experience>
            </section>
            <Footer strings={strings} />
        </div>
    );
}

export default App;