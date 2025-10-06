export type TLangDefinition = 'en' | 'ru'


export interface Skill {
    name: string;
    level: number;
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface SkillsData {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
    languages: Skill[];
}

export interface LanguageStrings {
    header: {
        title: string;
        subtitle: string;
        downloadCV: string;
    };
    skills: {
        title: string;
        categories: {
            frontend: string;
            backend: string;
            tools: string;
            languages: string;
        };
    };
    experience: {
        title: string;
    };
    contact: {
        title: string;
        email: string;
        phone: string;
        location: string;
    };
}