import React from 'react';
import { SkillsData, LanguageStrings } from '../types';

interface SkillsProps {
    strings: LanguageStrings;
    skills: SkillsData | null;
}

const Skills: React.FC<SkillsProps> = ({ strings, skills }) => {
    if (!skills) {
        return (
            <section className="skills-section">
                <h2>{strings.skills.title}</h2>
                <div className="error">No skills data available</div>
            </section>
        );
    }

    const SkillItem: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => (
        <div className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-level">
                <div
                    className="skill-level-fill"
                    style={{ width: `${skill.level}%` }}
                ></div>
            </div>
            <span className="skill-percent">{skill.level}%</span>
        </div>
    );

    return (
        <section className="skills-section">
            <h2>{strings.skills.title}</h2>

            <div className="skills-grid">
                <div className="skill-category">
                    <h3>{strings.skills.categories.frontend}</h3>
                    {skills.frontend.map(skill => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </div>

                <div className="skill-category">
                    <h3>{strings.skills.categories.backend}</h3>
                    {skills.backend.map(skill => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </div>

                <div className="skill-category">
                    <h3>{strings.skills.categories.tools}</h3>
                    {skills.tools.map(skill => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </div>

                <div className="skill-category">
                    <h3>{strings.skills.categories.languages}</h3>
                    {skills.languages.map(skill => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;