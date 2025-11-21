import React from "react";
import {LanguageStrings, SkillsData} from "@/types";
import './index.css'

interface SkillProps {
    strings: LanguageStrings;
    skills: SkillsData
}

export const Skills: React.FC<SkillProps> = ({ strings, skills }) => {
    return (
        <React.Fragment>
            <h2>{strings.skillsTitle}</h2>
            <div className="skills-4col">
                <div>
                    <strong>{strings.skillsCategoriesBE}</strong>
                    <br/>
                    {skills.backend.map((skill, i) => {
                        return <span key={`${skill}-${i}`} className="skill-name">{skill.name}</span>
                    })}
                </div>
                <div>
                    <strong>{strings.skillsCategoriesFE}</strong>
                    <br/>
                    {skills.frontend.map((skill,i) => {
                        return <span key={`${skill}-${i}`} className="skill-name">{skill.name}</span>
                    })}
                </div>
                <div>
                    <strong>{strings.skillsCategoriesTools}</strong>
                    <br/>
                    {skills.tools.map((skill,i) => {
                        return <span key={`${skill}-${i}`} className="skill-name">{skill.name}</span>
                    })}
                </div>

                <div>
                    <strong>{strings.skillsCategoriesLanguages}</strong>
                    <br/>
                    {skills.languages.map((skill,i) => {
                        return <span key={`${skill}-${i}`} className="skill-name">{skill.name}</span>
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}