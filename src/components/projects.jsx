import React from "react";
import '../css/projects.css';
import encryptor from '../img/projects/Encryptor.png';
import logogithub from '../img/svg/bxl-github.svg';
import demo from '../img/svg/bx-desktop.svg';
import task from '../img/projects/task-pointer.png';
import calculator from '../img/projects/calculator.png';
import form from '../img/projects/form.png';
import regex from '../img/projects/regex.png';
import clickCounter from '../img/projects/click-counter.png';


function Projects() {
    return (
        <section className="container__section projects" id="projects">
            <a href={window.location.pathname+'#projects'}><div className="title__div">
               <h2 className="title">Projects</h2>
            </div>
            </a>
            <div className="list__projects">
                <div className="container__card" id="encryptor">
                    <h2 className="subtitle">Encryptor</h2>
                    <div className="container__img">
                        <img className="img__projects" src={encryptor} alt="encryptor" />
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Encriptador/" target='_blank'><img className="link__img" src={demo} alt="demo"/><p>Ver demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Encriptador" target='_blank'><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                </div>
                <div className="container__card" id="task-pointer">
                    <h2 className="subtitle">Task Pointer</h2>
                    <div className="container__img">
                        <img className="img__projects" src={task} alt="task pointer" />
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Apuntador-de-Tareas/" target='_blank'><img className="link__img" src={demo} alt="demo" /><p>Ver demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Apuntador-de-Tareas" target='_blank'><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                </div>
                <div className="container__card" id="calculator">
                    <h2 className="subtitle">Calculator</h2>
                    <div className="container__img">
                        <img className="img__projects" src={calculator} alt="calculator" />
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/calculator/" target='_blank'><img className="link__img" src={demo} alt="demo" /><p>Ver demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/calculator" target='_blank'><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                </div>
                <div className="container__card" id="form">
                    <h2 className="subtitle">Aplication Form</h2>
                    <div className="container__img">
                        <img className="img__projects" src={form} alt="form" />
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Formulario/" target='_blank'><img className="link__img"  src={demo} alt="demo" /><p>Ver demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Formulario" target='_blank'><img className="link__img"  src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                </div>
                <div className="container__card" id="regex">
                    <h2 className="subtitle">Regex</h2>
                    <div className="container__img">
                        <img className="img__projects" src={regex} alt="regex" />
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Regex/" target='_blank'><img className="link__img" src={demo} alt="demo" /><p>Ver demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Regex" target='_blank'><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                </div>
                <div className="container__card" id="click-counter">
                    <h2 className="subtitle">Click Counter</h2>
                    <div className="container__img">
                        <img className="img__projects" src={clickCounter} alt="click counter" />
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Click-Counter/" target='_blank'><img className="link__img" src={demo} alt="demo" /><p>Ver demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Click-Counter" target='_blank'><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;