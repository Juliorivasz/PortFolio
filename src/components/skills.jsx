import React from 'react';
import '../css/skills.css';
import CarouselFirst from './carousel_first';
import CarouselSecond from './carousel_second';



function Skills() {
    return (
        <section className='container__section' id='skills'>
            <div className='title__div'>
                <h2 className='title'>Skills</h2>
            </div>
            <div className='carousel__combination'>
                <CarouselFirst/>
                <CarouselSecond/>
            </div>
        </section>
    );
}

export default Skills;