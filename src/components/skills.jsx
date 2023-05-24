import React from 'react';
import '../css/skills.css';
import Tecnology from './tecnology';
import javascript from '../img/skills/bxl-javascript.svg';
import typescript from '../img/skills/bxl-typescript.svg';
import reactjs from '../img/skills/bxl-react.svg';
import html5 from '../img/skills/bxl-html5.svg';
import ccs3 from '../img/skills/bxl-css3.svg';
import bootstrap from '../img/skills/bxl-bootstrap.svg';
import figma from '../img/skills/bxl-figma.svg';
import trello from '../img/skills/bxl-trello.svg';
import git from '../img/skills/bxl-git.svg';
import github from '../img/skills/bxl-github.svg';
import nodeJs from '../img/skills/bxl-nodejs.svg';
import npm from '../img/skills/bxl-npm.svg';
import tailwind from '../img/skills/bxl-tailwind-css.svg';
import sass from '../img/skills/bxl-sass.svg';
import redux from '../img/skills/bxl-redux.svg';




function Skills({theme}) {
    return (
        <section className={`container__section ${theme === "LightTheme" ? "bg__gray" : "bg__black"}`} id='skills'>
            <a href={window.location.pathname+'#skills'}><div className='title__div'>
                <h2 className={`title ${theme === "LightTheme" ? "b":"w"}`}>Skills</h2>
            </div>
            </a>
            <div className='container_skills'>
                <Tecnology 
                    route={javascript}
                    nameAlt="javascript"
                />
                <Tecnology 
                    route={typescript}
                    nameAlt="typecript"
                />
                <Tecnology 
                    route={reactjs}
                    nameAlt="react"
                />
                <Tecnology 
                    route={html5}
                    nameAlt="html5"
                />
                <Tecnology 
                    route={ccs3}
                    nameAlt="ccs3"
                />
                <Tecnology 
                    route={bootstrap}
                    nameAlt="bootstrap"
                />
                <Tecnology 
                    route={figma}
                    nameAlt="figma"
                />
                <Tecnology 
                    route={trello}
                    nameAlt="trello"
                />
                <Tecnology 
                    route={git}
                    nameAlt="git"
                />
                <Tecnology 
                    route={github}
                    nameAlt="github"
                />
                <Tecnology
                    route={nodeJs}
                    nameAlt="node js"
                />
                <Tecnology
                    route={npm}
                    nameAlt="npm"
                />
                <Tecnology
                    route={tailwind}
                    nameAlt="tailwind"
                />
                <Tecnology
                    route={sass}
                    nameAlt="sass"
                />
                <Tecnology
                    route={redux}
                    nameAlt="redux"
                />
            </div>
        </section>
    );
}

export default Skills;