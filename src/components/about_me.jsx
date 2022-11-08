import React from 'react';
import '../css/about_me.css';
import profile from '../img/julio.png';

function AboutMe() {
    return (
        <section className='container__section' id='about-me'>
            <a href={window.location.pathname+'#about-me'}><div className='title__div'>
                <h2 className='title'>About Me</h2>
            </div>
            </a>
            <div className='container__review__about_me'>
                <img className='img__about_me' src={profile} alt='profile' title='profile'/>
                <div className='section__about_me'>
                    <p>
                        Hello, my name is Julio, I consider myself an enthusiastic, proactive, responsible, 
                        detail-oriented person and open to receiving any type of feedback to continuously learn and improve. 
                        I stand out in front end development, although my goal is to achieve excellence as a fullstack developer.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

