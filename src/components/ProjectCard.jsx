import React from 'react'

const ProjectCard = ({project}) => {
    return (
        
            <div className="card">
                <h2>{project.title}</h2>
                <img src={project.imgSrc} alt={project.title}/>
                <p>{project.description}</p>
                <a href={project.link} onClick={(e) => {if (project.alert) {  e.preventDefault();window.alert(project.alert);  }}} target="_blank" rel="noopener">
                    <span>View Project</span>
                </a>
            </div>
    );
}

export default ProjectCard