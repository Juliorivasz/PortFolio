import React from 'react';
import '../css/about_me.css';
import profile from '../img/julio.png';

function AboutMe({theme}) {
    return (
        <section className={`container__section ${theme === "LightTheme" ? "bg__gray" : "bg__black"}`} id='about-me'>
            <a href={window.location.pathname+'#about-me'}><div className='title__div'>
                <h2 className={`title ${theme === "LightTheme" ? "b":"w"}`}>About Me</h2>
            </div>
            </a>
            <div className='container__review__about_me'>
                <img className='img__about_me' src={profile} alt='profile' title='profile'/>
                <div className='text__about_me'>
                    <p className={`${theme === "LightTheme" ? "text__about_me_child__b" : "text__about_me_child__w"}`}>
                        " Hello, my name is Julio, I consider myself enthusiastic, proactive, responsible, detail-oriented, 
                        open to giving and receiving any type of feedback to continuously learn and improve. I manage my time efficiently, 
                        I learn quickly on my own and as a team. "
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;

