import { useState } from 'react';
import './App.css';
import './css/animate.css';
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
  const urlLink = window.location.pathname;
  document.addEventListener("scroll",(function(){window.scrollY>=window.innerHeight/2? setActive('') : setActive('dissemble')}));

  const swap = () => {
    if(dissemble === 'dissemble'){
      setDissemble('');
    }else{
      setDissemble('dissemble');
    }
  } 
  
  const [sectorUp,setsectorUp] = useState('');
  const [sectorDown,setsectorDown] = useState('');

  
  // is a function used to move up or down the section
  const sectorU = () => {
    if(window.scrollY > 300 & window.scrollY <= 588){
      setsectorUp(urlLink+'#main');
      return sectorUp;
    }
    else if(window.scrollY > 510 & window.scrollY <= 1400){
      setsectorUp(urlLink+'#about-me');
      return sectorUp;
    }
    else if(window.scrollY > 1400 & window.scrollY <= 2081){
      setsectorUp(urlLink+'#skills');
      return sectorUp;
    }
    else if(window.scrollY > 2081 & window.scrollY <= 4000){
      setsectorUp(urlLink+'#projects');
      return sectorUp;
    }
    else if(window.scrollY > 4000 & window.scrollY <= 4776){
      setsectorUp(urlLink+'#projects');
      return sectorUp;
    }
    else if(window.scrollY > 4776 & window.scrollY <= 4900){
      setsectorUp(urlLink+'#contact');
      return sectorUp;
    }
  }

  // is a function used to move up or down the section
  const sectorD = () => {
    if(window.scrollY > 300 & window.scrollY <= 588){
      setsectorDown(urlLink+'#skills');
      return sectorUp;
    }
    else if(window.scrollY > 510 & window.scrollY <= 1400){
      setsectorDown(urlLink+'#projects');
      return sectorUp;
    }
    else if(window.scrollY > 1400 & window.scrollY <= 2081){
      setsectorDown(urlLink+'#contact');
      return sectorUp;
    }
    else if(window.scrollY > 2081 & window.scrollY <= 4900){
      setsectorDown(urlLink+'#footer');
      return sectorUp;
    }
  }


  return (
    <div className='App'>
      <header className='App__header' id='main'>
        <Nav
        diss = {dissemble}
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
              <a href={`${window.location.pathname+'#contact'}`} onClick={swap}><li className="item__list">Contact me</li></a>
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
      <footer className='footer' id='footer'>
          <div className='div__footer'>
            <p className='text__footer'>Julio A. Rivas Garcia. ©Copyright 2022 - Todos los derechos reservados</p>
          </div>
      </footer>
      <a href={sectorUp} className='a' onClick={sectorU}>
                <div className={`button__up ${dissemble ? '' : 'dissemble'} ${active}`.trimEnd()}>
                  <div className='button__up__2'>
                    <img src={up} alt="up" title='up' />
                  </div>
                </div>
            </a>
      <a href={sectorDown} className='a' onClick={sectorD}>
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
