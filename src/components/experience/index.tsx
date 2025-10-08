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
                <h2>{strings.experience.title}</h2>
                <div className="error">No experience data available</div>
            </section>
        );
    }

    return (
        <section className="experience-section">
            <h2>{strings.experience.title}</h2>

            <div className="experiences-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <h3 className="company">{exp.company}</h3>
                        <p className="position">{exp.position}</p>
                        <p className="period">{exp.period}</p>
                        <p className="description">{exp.description}</p>
                        <p className="responsibilities">
                            {
                                exp.responsibilities.map(resp => {
                                    return <div>{resp}</div>
                                })
                            }
                        </p>

                        <div className="technologies">
                            {exp.technologies.map(tech => (
                                <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;