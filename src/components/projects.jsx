import React from "react";
import '../css/projects.css';
import playerzone from '../img/projects/playerZone.png';
import rickyAndMorty from '../img/projects/rickandmorthy.png';
import logogithub from '../img/svg/bxl-github.svg';
import demo from '../img/svg/bx-desktop.svg';
import task from '../img/projects/task-pointer.png';
import gifapp from '../img/projects/gifApp.png';
import form from '../img/projects/form.png';
import regex from '../img/projects/regex.png';

function Projects({ theme }) {
    
    function mostrarImg(e) {
        const imgSrc = {
            playerzone: 'http://'+window.location.host+playerzone,
            gifapp: 'http://'+window.location.host+gifapp,
            task: 'http://'+window.location.host+task,
            rickyAndMorty: 'http://'+window.location.host+rickyAndMorty,
            form: 'http://'+window.location.host+form,
            regex: 'http://'+window.location.host+regex
            
        }
        if(e.target.src === imgSrc.playerzone){
            const description = document.querySelectorAll('.invisible');
            description[0].style.display = 'block';
            description[0].style.opacity = '1';
            description[0].style.top = '199.2rem';
            description[0].style.setProperty('visibility', 'visible', 'important');
        }else if(e.target.src === imgSrc.gifapp) {
            const description = document.querySelectorAll('.invisible');
            description[1].style.display = 'block';
            description[1].style.opacity = '1';
            description[1].style.top = '199.2rem';
            description[1].style.setProperty('visibility', 'visible', 'important');
        }else if(e.target.src === imgSrc.task) {
            const description = document.querySelectorAll('.invisible');
            description[2].style.display = 'block';
            description[2].style.opacity = '1';
            description[2].style.top = '199.2rem';
            description[2].style.setProperty('visibility', 'visible', 'important');
        }else if(e.target.src === imgSrc.rickyAndMorty) {
            const description = document.querySelectorAll('.invisible');
            description[3].style.display = 'block';
            description[3].style.opacity = '1';
            description[3].style.top = '233.2rem';
            description[3].style.setProperty('visibility', 'visible', 'important');
        }else if(e.target.src === imgSrc.form) {
            const description = document.querySelectorAll('.invisible');
            description[4].style.display = 'block';
            description[4].style.opacity = '1';
            description[4].style.top = '233.2rem';
            description[4].style.setProperty('visibility', 'visible', 'important');
        }else if(e.target.src === imgSrc.regex) {
            const description = document.querySelectorAll('.invisible');
            description[5].style.display = 'block';
            description[5].style.opacity = '1';
            description[5].style.top = '233.2rem';
            description[5].style.setProperty('visibility', 'visible', 'important');
        }
    }
    
    function normalidad(e) {
        if(e.target.parentElement.className === 'invisible playerzone'){
            const description = document.querySelectorAll('.invisible');
            description[0].style.top = '207.2rem';
            description[0].style.opacity = '0';
            description[0].style.setProperty('visibility', 'hidden', 'important');
        }else if(e.target.parentElement.className === 'invisible gifapp'){
            const description = document.querySelectorAll('.invisible');
            description[1].style.top = '207.2rem';
            description[1].style.opacity = '0';
            description[1].style.setProperty('visibility', 'hidden', 'important');
        }else if(e.target.parentElement.className === 'invisible apuntadorDeTareas'){
            const description = document.querySelectorAll('.invisible');
            description[2].style.top = '207.2rem';
            description[2].style.opacity = '0';
            description[2].style.setProperty('visibility', 'hidden', 'important');
        }else if(e.target.parentElement.className === 'invisible rickyandmorty'){
            const description = document.querySelectorAll('.invisible');
            description[3].style.top = '225.2rem';
            description[3].style.opacity = '0';
            description[3].style.setProperty('visibility', 'hidden', 'important');
        }else if(e.target.parentElement.className === 'invisible formulario'){
            const description = document.querySelectorAll('.invisible');
            description[4].style.top = '225.2rem';
            description[4].style.opacity = '0';
            description[4].style.setProperty('visibility', 'hidden', 'important');
        }else if(e.target.parentElement.className === 'invisible expresionesRegulares'){
            const description = document.querySelectorAll('.invisible');
            description[5].style.top = '225.2rem';
            description[5].style.opacity = '0';
            description[5].style.setProperty('visibility', 'hidden', 'important');
        }
    }


    return (
        <section className="container__section projects" id="projects">
            <a href={window.location.pathname + '#projects'}><div className="title__div">
                <h2 className={`title ${theme === "LightTheme" ? "b" : "w"}`}>Projects</h2>
            </div>
            </a>
            <div className="list__projects">
                <div className="container__card" id="playerZone">
                    <h2 className="subtitle">PlayerZone</h2>
                    <a className="link" href="https://playerzone.netlify.app/" target='_blank' rel="noreferrer" title="watch project">
                        <div className="container__img">
                            <img className="img__projects" src={playerzone} alt="encryptor" onMouseOver={mostrarImg}  />
                        </div>
                    </a>
                    <div className="container__link">
                        <a className="link" href="https://playerzone.netlify.app/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Watch</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/PlayerZone" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="invisible playerzone" onMouseLeave={normalidad}>
                        <p id="playerzone">
                        PlayerZone es un emocionante proyecto de comercio electrónico basado en tecnología y productos de PC. 
                        Desarrollado con HTML, CSS y JavaScript, brinda a los usuarios una experiencia de compra en línea fácil y conveniente.
                        <ul className="list__caracteristicas__playerzone">
                            <li>Amplio catálogo de productos de tecnología y PC.</li>
                            <li>Navegación intuitiva.</li>
                            <li>Funcionalidad de búsqueda robusta para encontrar rápidamente los productos deseados.</li>
                            <li>Carrito de compras.</li>
                        </ul>
                        </p>
                    </div>
                </div>
                <div className="container__card" id="gifapp">
                    <h2 className="subtitle">GifApp</h2>
                    <a className="link" href="https://gipfapp.netlify.app/" target='_blank' rel="noreferrer" title="watch project">
                        <div className="container__img">
                            <img className="img__projects" src={gifapp} alt="calculator" onMouseOver={mostrarImg}/>
                        </div>
                    </a>
                    <div className="container__link">
                        <a className="link" href="https://gipfapp.netlify.app/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Watch</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/GifApp" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="invisible gifapp" onMouseLeave={normalidad}>
                        <p id="gifApp">
                        GifApp es un proyecto web desarrollado con React, HTML, CSS y JavaScript, 
                        que consume una API de Giphy para mostrar los primeros 10 GIFs relacionados a través de un buscador interactivo. 
                        Esta aplicación ofrece una experiencia de búsqueda y visualización de GIFs de manera sencilla y divertida.
                        <ul className="list__caracteristicas__playerzone">
                            <li>Consumo de la API de Giphy.</li>
                            <li>Búsqueda de GIFs.</li>
                            <li>Interfaz interactiva.</li>
                            <li>Visualización de GIFs.</li>
                        </ul>
                        </p>
                    </div>
                </div>
                <div className="container__card" id="task-pointer">
                    <h2 className="subtitle">Task Pointer</h2>
                    <a className="link" href="https://juliorivasz.github.io/Apuntador-de-Tareas/" target='_blank' rel="noreferrer" title="watch project">
                        <div className="container__img">
                            <img className="img__projects" src={task} alt="task pointer" onMouseOver={mostrarImg}/>
                        </div>
                    </a>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Apuntador-de-Tareas/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Watch</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Apuntador-de-Tareas" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="invisible apuntadorDeTareas" onMouseLeave={normalidad}>
                        <p id="apuntadorDeTareas">
                        La aplicación de Lista de Tareas es un proyecto web desarrollado con HTML, CSS y JavaScript que permite a los usuarios agregar tareas a una lista, establecer una fecha para cada tarea y eliminar las tareas seleccionadas. Esta aplicación proporciona una interfaz sencilla y funcional para administrar y completar tareas diarias.
                        <ul className="list__caracteristicas__playerzone">
                            <li>Creación de tareas.</li>
                            <li>Establecimiento de fechas.</li>
                            <li>Eliminación de tareas.</li>
                        </ul>
                        </p>
                    </div>
                </div>
                <div className="container__card" id="encryptor">
                    <h2 className="subtitle">Ricky&Morty</h2>
                    <a className="link" href="https://rickyandmorthy.netlify.app/" target='_blank' rel="noreferrer" title="watch project">
                        <div className="container__img">
                            <img className="img__projects" src={rickyAndMorty} alt="encryptor" onMouseOver={mostrarImg}/>
                        </div>
                    </a>
                    <div className="container__link">
                        <a className="link" href="https://rickyandmorthy.netlify.app/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Watch</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Ricky-Morty" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="invisible rickyandmorty" onMouseLeave={normalidad}>
                        <p id="encriptador">
                            PlayerZone es un emocionante eCommerce que se especializa en productos y accesorios para gamers. Nuestro objetivo es ofrecer a los 
                            entusiastas de los videojuegos una plataforma completa para satisfacer todas sus necesidades relacionadas con el mundo gamer.
                        </p>
                    </div>
                </div>
                <div className="container__card" id="form">
                    <h2 className="subtitle">Aplication Form</h2>
                    <a className="link" href="https://juliorivasz.github.io/Formulario/" target='_blank' rel="noreferrer" title="watch project">
                        <div className="container__img">
                            <img className="img__projects" src={form} alt="form" onMouseOver={mostrarImg}/>
                        </div>
                    </a>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Formulario/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Watch</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Formulario" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="invisible formulario" onMouseLeave={normalidad}>
                        <p id="formulario">
                            PlayerZone es un emocionante eCommerce que se especializa en productos y accesorios para gamers. Nuestro objetivo es ofrecer a los 
                            entusiastas de los videojuegos una plataforma completa para satisfacer todas sus necesidades relacionadas con el mundo gamer.
                        </p>
                    </div>
                </div>
                <div className="container__card" id="regex">
                    <h2 className="subtitle">Regex</h2>
                    <a className="link" href="https://juliorivasz.github.io/Regex/" target='_blank' rel="noreferrer" title="watch project">
                        <div className="container__img">
                            <img className="img__projects" src={regex} alt="regex" onMouseOver={mostrarImg}/>
                        </div>
                    </a>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Regex/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Watch</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Regex" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="invisible expresionesRegulares" onMouseLeave={normalidad}>
                        <p id="expresionesRegulares">
                            PlayerZone es un emocionante eCommerce que se especializa en productos y accesorios para gamers. Nuestro objetivo es ofrecer a los 
                            entusiastas de los videojuegos una plataforma completa para satisfacer todas sus necesidades relacionadas con el mundo gamer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;