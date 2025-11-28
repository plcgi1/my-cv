export type TLangDefinition = 'en' | 'ru'


export interface Skill {
    name: string;
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    responsibilities: Skill[]
    technologies: string[];
}

export interface SkillsData {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
    languages: Skill[];
}

export interface LanguageStrings {
    headerTitle: string
    headerLocation: string
    headerPhone: string
    headerSubtitle: string;
    headerEmail: string;

    targetTitle: string;
    targetSubtitle: string[]

    skillsTitle: string
    skillsCategoriesFE: string
    skillsCategoriesBE: string
    skillsCategoriesTools: string
    skillsCategoriesLanguages: string

    experienceTitle: string
    experienceResponsibilities: string
    experienceTechnologies: string

    footerCopyright: string
    footerPrintVersion: string
}