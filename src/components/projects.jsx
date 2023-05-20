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

    function mostrarDescripcion(e) {
        const description = document.querySelectorAll('.description');
        console.log(description[e.target.getAttribute('datatype')]);
        // e.target.getAttribute('datatype'
        description[e.target.getAttribute('datatype')].style.transform = 'translateY(-100%)';
        description[e.target.getAttribute('datatype')].style.opacity = '1';
    }

    function cerrarDescripcion(e) {
        const description = document.querySelectorAll('.description');
        description[e.target.getAttribute('datatype')].style.transform = 'translateY(0)';
        description[e.target.getAttribute('datatype')].style.opacity = '0';
        description[e.target.getAttribute('datatype')].style.transition = 'all 1s';
        // description[e.target.getAttribute('datatype')].style.display = 'none';
    }

    return (
        <section className={`container__section projects ${theme === "LightTheme" ? "bg__gray" : "bg__black"}`} id="projects">
            <a href={window.location.pathname + '#projects'}><div className="title__div">
                <h2 className={`title ${theme === "LightTheme" ? "b" : "w"}`}>Projects</h2>
            </div>
            </a>
            <div className="list__projects">
                <div className="container__card" id="playerZone">
                    <h2 className="subtitle">PlayerZone</h2>
                    <div className="container__img">
                        <img className="img__projects" src={playerzone} alt="playerzone" />
                        <div className="container__detail">
                            <div className="back__circle" title="ver mas" onClick={mostrarDescripcion} datatype="0">
                                <span id="vertical__bar" datatype="0"></span>
                                <span id="horizontal__bar" datatype="0"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://playerzone.netlify.app/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/PlayerZone" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="description player">
                        <p className="description__text">
                            PlayerZone es un emocionante proyecto de comercio electrónico basado en tecnología y productos de PC.
                            Desarrollado con HTML, CSS y JavaScript, brinda a los usuarios una experiencia de compra en línea fácil y conveniente,
                            ofrece una amplia gama de productos, como componentes de PC.
                        </p>
                        <ul className="list__caracteristicas">
                            <li>Amplio catálogo de productos de tecnología y PC.</li>
                            <li>Navegación intuitiva.</li>
                            <li>Barra de búsqueda para los productos deseados.</li>
                            <li>Carrito de compras.</li>
                        </ul>
                        <div className="container__close__description" onClick={cerrarDescripcion} datatype="0">
                            <span id="close__bar__left" datatype="0"></span>
                            <span id="close__bar__right" datatype="0"></span>
                        </div>
                    </div>
                </div>
                <div className="container__card" id="gifapp">
                    <h2 className="subtitle">GifApp</h2>
                    <div className="container__img">
                        <img className="img__projects" src={gifapp} alt="gifapp" />
                        <div className="container__detail">
                            <div className="back__circle" title="ver mas" onClick={mostrarDescripcion} datatype="1">
                                <span id="vertical__bar" datatype="1"></span>
                                <span id="horizontal__bar" datatype="1"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://gipfapp.netlify.app/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/GifApp" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="description gifapp">
                        <p className="description__text">
                            GifApp es un proyecto web desarrollado con React, HTML, CSS y JavaScript,
                            que consume una API de Giphy para mostrar los primeros 10 GIFs relacionados a través de un buscador interactivo.
                            Esta aplicación ofrece una experiencia de búsqueda y visualización de GIFs de manera sencilla y divertida.
                        </p>
                        <ul className="list__caracteristicas">
                            <li>Consumo de la API de Giphy.</li>
                            <li>Búsqueda de GIFs.</li>
                            <li>Interfaz interactiva.</li>
                            <li>Visualización de GIFs.</li>
                        </ul>
                        <div className="container__close__description" onClick={cerrarDescripcion} datatype="1">
                            <span id="close__bar__left" datatype="1"></span>
                            <span id="close__bar__right" datatype="1"></span>
                        </div>
                    </div>
                </div>
                <div className="container__card" id="task-pointer">
                    <h2 className="subtitle">Task Pointer</h2>
                    <div className="container__img">
                        <img className="img__projects" src={task} alt="task pointer" />
                        <div className="container__detail">
                            <div className="back__circle" title="ver mas" onClick={mostrarDescripcion} datatype="2">
                                <span id="vertical__bar" datatype="2"></span>
                                <span id="horizontal__bar" datatype="2"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Apuntador-de-Tareas/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Apuntador-de-Tareas" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="description apuntadorDeTareas" >
                        <p className="description__text">
                            TaskPointer es un proyecto web desarrollado con HTML, CSS y JavaScript que permite a los usuarios agregar tareas a una lista,
                            establecer una fecha para cada tarea y eliminar las tareas seleccionadas. Esta aplicación proporciona una interfaz sencilla y funcional para administrar y completar tareas diarias.
                        </p>
                        <ul className="list__caracteristicas">
                            <li>Creación de tareas.</li>
                            <li>Establecimiento de fechas.</li>
                            <li>Indicador de tarea realizada.</li>
                            <li>Eliminación de tareas.</li>
                        </ul>
                        <div className="container__close__description" onClick={cerrarDescripcion} datatype="2">
                            <span id="close__bar__left" datatype="2"></span>
                            <span id="close__bar__right" datatype="2"></span>
                        </div>
                    </div>
                </div>
                <div className="container__card" id="rickyAndMorty">
                    <h2 className="subtitle">Ricky&Morty</h2>
                    <div className="container__img">
                        <img className="img__projects" src={rickyAndMorty} alt="ricky&morty" />
                        <div className="container__detail">
                            <div className="back__circle" title="ver mas" onClick={mostrarDescripcion} datatype="3">
                                <span id="vertical__bar" datatype="3"></span>
                                <span id="horizontal__bar" datatype="3"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://rickyandmorthy.netlify.app/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Ricky-Morty" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="description rickyandmorty" >
                        <p className="description__text">
                            Ricky&Morty es una página web desarrollada con React.js y Vite que utiliza la API de Rick & Morty para mostrar información sobre los personajes de la serie.
                            La página presenta una serie de tarjetas, una por cada personaje, que incluyen detalles como el nombre, la imagen, las características y el estado de vida del personaje.
                        </p>
                        <ul className="list__caracteristicas">
                            <li>Consumo de la API de Rick & Morty</li>
                            <li>Diseño de tarjetas de personajes.</li>
                            <li>Indicador de estado de vida.</li>
                            <li>Diseño responsivo</li>
                        </ul>
                        <div className="container__close__description" onClick={cerrarDescripcion} datatype="3">
                            <span id="close__bar__left" datatype="3"></span>
                            <span id="close__bar__right" datatype="3"></span>
                        </div>
                    </div>
                </div>
                <div className="container__card" id="form">
                    <h2 className="subtitle">PetShop</h2>
                    <div className="container__img">
                        <img className="img__projects" src={form} alt="form" />
                        <div className="container__detail">
                            <div className="back__circle" title="ver mas" onClick={mostrarDescripcion} datatype="4">
                                <span id="vertical__bar" datatype="4"></span>
                                <span id="horizontal__bar" datatype="4"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Formulario/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Formulario" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="description formulario" >
                        <p className="description__text">
                            PetShop es un formulario interactivo que utiliza HTML, CSS y JavaScript para recopilar información de los clientes interesados en reservar en una tienda de mascotas.
                            Implementa validaciones para asegurar que los datos ingresados sean correctos y completos antes de enviar el formulario,
                            mejorando la experiencia del usuario.
                        </p>
                        <ul className="list__caracteristicas">
                            <li>Verificación de campos obligatorios.</li>
                            <li>Validación de formato.</li>
                            <li>Validación de longitud de caracteres.</li>
                            <li>Verificación de selección</li>
                        </ul>
                        <div className="container__close__description" onClick={cerrarDescripcion} datatype="4">
                            <span id="close__bar__left" datatype="4"></span>
                            <span id="close__bar__right" datatype="4"></span>
                        </div>
                    </div>
                </div>
                <div className="container__card" id="regex">
                    <h2 className="subtitle">Regex</h2>
                    <div className="container__img">
                        <img className="img__projects" src={regex} alt="regex" />
                        <div className="container__detail">
                            <div className="back__circle" title="ver mas" onClick={mostrarDescripcion} datatype="5">
                                <span id="vertical__bar" datatype="5"></span>
                                <span id="horizontal__bar" datatype="5"></span>
                            </div>
                        </div>
                    </div>
                    <div className="container__link">
                        <a className="link" href="https://juliorivasz.github.io/Regex/" target='_blank' rel="noreferrer"><img className="link__img" src={demo} alt="demo" /><p>Demo</p></a>
                        <a className="link" href="https://github.com/Juliorivasz/Regex" target='_blank' rel="noreferrer"><img className="link__img" src={logogithub} alt="github" /><p>GitHub</p></a>
                    </div>
                    <div className="description expresionesRegulares" >
                        <p className="description__text">
                            Regex es una página web diseñada específicamente para practicar y experimentar con expresiones regulares, utiliza HTML,
                            CSS y JavaScript para proporcionar a los usuarios una herramienta interactiva y educativa
                            donde pueden practicar sobre expresiones regulares, resaltando las coincidencias encontradas.
                        </p>
                        <ul className="list__caracteristicas">
                            <li>Interfaz intuitiva y fácil de usar.</li>
                            <li>Pruebas en tiempo real.</li>
                            <li>Mostrar un índice y los grupos encontrados.</li>
                            <li>Indicador de coincidencia encontrada</li>
                        </ul>
                        <div className="container__close__description" onClick={cerrarDescripcion} datatype="5">
                            <span id="close__bar__left" datatype="5"></span>
                            <span id="close__bar__right" datatype="5"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;