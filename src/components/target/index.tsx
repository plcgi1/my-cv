import React from "react";
import {LanguageStrings} from "@/types";
import './index.css'

interface TargetProps {
    strings: LanguageStrings;
}

export const Target: React.FC<TargetProps> = ({ strings }) => {
    return (
        <React.Fragment>
        <h2>{strings.target.title}</h2>
        <p>{strings.target.subtitle}</p>
        </React.Fragment>
    )
}