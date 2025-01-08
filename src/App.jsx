import React, { useRef, useState, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import {about, projects, skills, contact} from './components/data'
import useCardScroller from './components/scrollers'

import './App.css';




const App = () => {
const { cardContainerRef, showLeftArrow, showRightArrow, handleScroll, scrollLeft, scrollRight } = useCardScroller();



    return (
        <>
        <Navbar/>
        <Section title='About'    id='about'     childClassName={''}                          >  <p>{about}</p>                                           </Section>
        <Section title='Projects' id='projects'  childClassName={"project-cards"}             >  {projects.map((proj) =><ProjectCard project={proj}/> )}  </Section>
        <Section title='Skills'   id='skills'    className = 'container' childClassName={"skill-cards card-wrapper"}  >  
            {showLeftArrow && (<button className="arrow left" onClick={scrollLeft}>◀</button>)}
            <div className="card-container"         ref={cardContainerRef}        onScroll={handleScroll}>
                {skills.map((skill) =><SkillCard skill={skill}/> )}
            </div>
            {showRightArrow && (<button className="arrow right" onClick={scrollRight}> ▶</button>)}
        </Section>
        <footer title='Contact'  id='contact' style={{border:0}}>
            <h1 className="title" id="contact-heading">Contact</h1>
            <br />
            {...contact}
        </footer>
        </>
    )
}


export default App;
