import React from 'react';

import './skills.scss';

const Skills = ({data}) => {

    const getRaiting = (level) => {
        const skill = [];
        for( let i = 1; i<=10; i++) {
            if(i <= level) {
                skill.push(
                    <span key={i} className="dots dots-active"></span>
                )
            } else {
                skill.push(
                   <span key={i} className="dots"></span> 
                )
            }
        }
        return skill;
    }


    const elements = data.map((item, index) => {
        const {name, level} = item;
        const raiting = getRaiting(level);
        return (
            <div key={index} className="skill">
                <span className="skill__name">{name}</span>
                <span className="skill__level">
                    <span>{raiting}</span>
                </span>
            </div>
        )
    });

    return (
        <section className="skills">
            <div className="container">
                <h3 className="skills__heading">
                    Skills
                </h3>
                <div className="skills__content">
                    {elements}
                </div>
            </div>
        </section>
    )
};

export default Skills;