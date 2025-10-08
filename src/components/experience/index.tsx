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
                        <div className="exp-3col">
                            <p className="period">{exp.period}</p>
                            <h3 className="company">{exp.company}</h3>
                            <p className="position">{exp.position}</p>
                        </div>
                        <p className="description">{exp.description}</p>
                        <div className="exp-2col">
                            <div className="responsibilities">
                                {
                                    exp.responsibilities
                                        .sort((a,b) => {
                                            return b.level - a.level
                                        })
                                        .map(resp => {
                                            return <div className="exp-item exp-2col">

                                                <div className="exp-name">{resp.name}</div>
                                                <div className="exp-level">
                                                    <div
                                                        className="exp-level-fill"
                                                        style={{ width: `${resp.level}%` }}
                                                    ></div>
                                                </div>
                                                <span className="exp-percent">{resp.level}%</span>
                                            </div>
                                        })
                                }
                            </div>

                            <div className="technologies">
                                {exp.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;