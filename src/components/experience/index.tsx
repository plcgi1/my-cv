import React from 'react';
import { Experience as ExperienceType, LanguageStrings } from '../../types';
import './index.css'

interface ExperienceProps {
    strings: LanguageStrings;
    experiences: ExperienceType[] | null;
}

export const Experience: React.FC<ExperienceProps> = ({ strings, experiences }) => {
    if (!experiences) {
        return (
            <section className="experience-section">
                <h2>{strings.experienceTitle}</h2>
                <div className="error">No experience data available</div>
            </section>
        );
    }

    return (
        <section className="experience-section page-break-before">
            <h2>{strings.experienceTitle}</h2>

            <div className="experiences-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="exp-2col">
                            <div className='col'>
                                <p className="period">{exp.period}</p>
                            </div>
                            <div>
                                <h2 className="company">{exp.company} / {exp.position}</h2>
                                <h4 className="position">{strings.experienceResponsibilities}</h4>
                                <ul className="responsibilities">
                                    {
                                        exp.responsibilities
                                            .map(resp => {
                                                return <li key={`exp-${resp.name}`} className="exp-item">
                                                    {resp.name}
                                                </li>
                                            })
                                    }
                                </ul>
                                <h4 className="position">{strings.experienceTechnologies}</h4>
                                <div className="skills-adaptive">
                                    {exp.technologies.map(tech => (
                                        <span key={tech} className="skill">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;