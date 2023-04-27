import React from 'react';
import './SkillsItem.scss';

const SkillsItem = ({ title, percentage }) => {
    return (
        <div className="skills__item">
            <div className="skills__item__info">
                <h3 className="skills__item__title">{title}</h3>
                <span className="skills__item__percentage">{percentage}%</span>
            </div>
            <div className="skills__item__progress">
                <div className="skills__item__progress__bar" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};

export default SkillsItem;