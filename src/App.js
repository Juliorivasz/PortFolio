import { useState } from 'react';
import './App.css';
import AboutMe from './components/about_me';
import Contact from './components/contact';
import Nav from './components/nav';
import Projects from './components/projects';
import Skills from './components/skills';
import down from './img/svg/bxs-chevron-down.svg';
import pitching from './img/svg/pitching.png';
import up from './img/svg/bxs-chevron-up.svg';


function App() {

  const [dissemble, setDissemble] = useState('dissemble');
  const [active, setActive ] = useState('dissemble');
    document.addEventListener("scroll",(function(){window.scrollY>=window.innerHeight/2? setActive('') : setActive('dissemble')}));

  const swap = () => {
    if(dissemble === 'dissemble'){
      setDissemble('');
    }else{
      setDissemble('dissemble');
    }
  } 


  return (
    <div className='App'>
      <header className='App__header' id='main'>
        <Nav
        dissemble = {swap}/>
        <div className='container__title'>
          <h1 className='title__portfolio'>Julio Rivas<br/> Front End Developer</h1>
          <img className='pitch' src={pitching} />
        </div>
        <div className='container__button__down'>
          <a href={window.location.pathname+'#about-me'}>
            <div className='circle'>
              <p className='text__down'>Press Down</p>
              <img src={down} className='img__down' alt='down' />
            </div>
          </a>
        </div>
        <section className={`menu__mobile ${dissemble}`}>
          <ul className='list__nav'>
              <a href={`${window.location.pathname+'#about-me'}`} onClick={swap} ><li className="item__list">About Me</li></a>
              <a href={`${window.location.pathname+'#skills'}`} onClick={swap}><li className="item__list">Skills</li></a>
              <a href={`${window.location.pathname+'#projects'}`} onClick={swap}><li className="item__list">Projects</li></a>
              <a href={`${window.location.pathname+'#contact'}`} onClick={swap}><li className="item__list">Contact</li></a>
          </ul>
        </section>
      </header>
      <main>
        <AboutMe 
        dissemble={dissemble}/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <footer className='footer'>
          <div className='div__footer'>
            <p className='text__footer'>Julio A. Rivas Garcia. ©Copyright 2022 - Todos los derechos reservados</p>
          </div>
      </footer>
      <a href='#top' className='a'>
                <div className={`button__up ${dissemble ? '' : 'dissemble'} ${active}`.trimEnd()}>
                  <div className='button__up__2'>
                    <img src={up} alt="up" title='up' />
                  </div>
                </div>
            </a>
      <a href='#top' className='a'>
                <div className={`button__down ${dissemble ? '' : 'dissemble'} ${active}`.trimEnd()}>
                  <div className='button__down__2'>
                    <img src={down} alt="down" title='down' />
                  </div>
                </div>
            </a>
    </div>
  );
}

export default App;
