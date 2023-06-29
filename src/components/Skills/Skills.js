import React from 'react';
import './Skills.scss';
import SkillsItem from '../SkillsItem/SkillsItem';

const Skills = () => {
    const skillData = [
        { title: 'HTML & CSS', percentage: 90 },
        { title: 'Sass', percentage: 80 },
        { title: 'Git', percentage: 50 },
        { title: 'ReactJS', percentage: 70 },
        { title: 'JavaScript', percentage: 80 },
        { title: 'NodeJS', percentage: 50 },
    ];

    const midPoint = Math.ceil(skillData.length / 2);

    return (
        <section className="skills">
            <h2 className="skills__title">My Skills</h2>
            <p className="skills__description">
            As a web developer, I excel at building visually engaging and highly functional websites 
            by leveraging technologies such as HTML, CSS, JavaScript, and ReactJS. My familiarity with Sass, Git 
            allows me to efficiently manage projects and adapt to various client demands.
            </p>
            <div className="skills__list">
                <div className="skills__column">
                    {skillData.slice(0, midPoint).map(skill => (
                        <SkillsItem key={skill.title} title={skill.title} percentage={skill.percentage} />
                    ))}
                </div>
                <div className="skills__column">
                    {skillData.slice(midPoint).map(skill => (
                        <SkillsItem key={skill.title} title={skill.title} percentage={skill.percentage} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;