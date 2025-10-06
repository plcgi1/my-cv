// import { useState, useEffect } from 'react';
// import { SkillsData, Experience } from '../types';
// import { TLangDefinition } from '@/types'
//
// // Кэш для загруженных данных
// const dataCache = new Map<string, { skills: SkillsData; experience: Experience[] }>();
//
// export const useResumeData = (language: TLangDefinition) => {
//     const [skills, setSkills] = useState<SkillsData | null>(null);
//     const [experience, setExperience] = useState<Experience[] | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//
//     const loadData = async (lang: TLangDefinition) => {
//         try {
//             setLoading(true);
//             setError(null);
//
//             // Динамический импорт с query параметром для избежания кэширования
//             const skillsPromise = import(/* @vite-ignore */ `../data/${lang}/skills.ts?t=${Date.now()}`);
//             const experiencePromise = import(/* @vite-ignore */ `../data/${lang}/experience.ts?t=${Date.now()}`);
//
//             const [skillsModule, experienceModule] = await Promise.all([
//                 skillsPromise,
//                 experiencePromise
//             ]);
//
//             const newData = {
//                 skills: skillsModule.default,
//                 experience: experienceModule.default
//             };
//
//             // Сохраняем в кэш
//             dataCache.set(lang, newData);
//
//             setSkills(newData.skills);
//             setExperience(newData.experience);
//
//         } catch (err) {
//             // Пробуем загрузить из кэша при ошибке
//             const cached = dataCache.get(lang);
//             if (cached) {
//                 setSkills(cached.skills);
//                 setExperience(cached.experience);
//             } else {
//                 setError(`Failed to load ${lang} data`);
//                 console.error('Error loading data:', err);
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     useEffect(() => {
//         loadData(language);
//     }, [language]);
//
//     return {
//         skills,
//         experience,
//         loading,
//         error,
//         reload: () => loadData(language) // Функция для ручной перезагрузки
//     };
// };
import { useState, useEffect } from 'react';
import { SkillsData, Experience } from '../types';

// Статический импорт всех данных
import * as enSkills from '../data/en/skills';
import * as enExperience from '../data/en/experience';
import * as ruSkills from '../data/ru/skills';
import * as ruExperience from '../data/ru/experience';
import { TLangDefinition } from '@/types'

const data = {
    en: {
        skills: enSkills.skills,
        experience: enExperience.experience
    },
    ru: {
        skills: ruSkills.skills,
        experience: ruExperience.experience
    }
};

export const useResumeData = (language: TLangDefinition) => {
    const [skills, setSkills] = useState<SkillsData | null>(null);
    const [experience, setExperience] = useState<Experience[] | null>(null);

    useEffect(() => {
        setSkills(data[language].skills);
        setExperience(data[language].experience);
    }, [language]);

    return {
        skills,
        experience,
        error: null
    };
};