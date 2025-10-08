
import { useState, useEffect } from 'react';
import { Experience } from '../types';

// Статический импорт всех данных
import {
    skills
} from '../data/skills';
import * as enExperience from '../data/en/experience';
import * as ruExperience from '../data/ru/experience';
import { TLangDefinition } from '@/types'

const data = {
    en: {
        experience: enExperience.experience
    },
    ru: {
        experience: ruExperience.experience
    }
};

export const useResumeData = (language: TLangDefinition) => {
    const [experience, setExperience] = useState<Experience[] | null>(null);

    useEffect(() => {
        setExperience(data[language].experience);
    }, [language]);

    return {
        skills,
        experience,
        error: null
    };
};