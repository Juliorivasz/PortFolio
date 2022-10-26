import { React, useState } from 'react';
import '../css/about_me.css';
import profile from '../img/svg/foto_de_perfil.svg';
import up from '../img/svg/bxs-chevrons-up.svg';


function AboutMe(props) {

    const [active, setActive ] = useState('');
    document.addEventListener("scroll",(function(){window.scrollY>=window.innerHeight/2? setActive('') : setActive('dissemble')}));

    return (
        <section className='container__section' id='about-me'>
            <div className='title__div'>
                <h2 className='title'>About Me</h2>
            </div>
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
            <a href='#top'><div className={`button__up ${props.dissemble ? '' : 'dissemble'} ${active}`.trimEnd()}>
                <img src={up} alt="up" title='up' />
            </div>
            </a>
        </section>
    );
}

export default AboutMe;

