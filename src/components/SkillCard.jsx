import React from 'react'

const SkillCard = ({skill}) => {
    return (
        <div className="skill-card" id={skill.id}>
            <img src={skill.imgSrc} alt={skill.title}/>
            <h3>{skill.title}</h3>
        </div>
    );
}

export default SkillCard