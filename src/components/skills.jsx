import React from 'react';
import '../css/skills.css';
import CarouselFirst from './carousel_first';
import CarouselSecond from './carousel_second';



function Skills({theme}) {
    return (
        <section className='container__section' id='skills'>
            <a href={window.location.pathname+'#skills'}><div className='title__div'>
                <h2 className={`title ${theme === "LightTheme" ? "b":"w"}`}>Skills</h2>
            </div>
            </a>
            <div className='carousel__combination'>
                <CarouselFirst/>
                <CarouselSecond/>
            </div>
        </section>
    );
}

export default Skills;