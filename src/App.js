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
    if(window.scrollY > 300 & window.scrollY <= 631){
      setsectorUp(urlLink+'#main');
      return sectorUp;
    }
    else if(window.scrollY > 510 & window.scrollY <= 1400){
      setsectorUp(urlLink+'#about-me');
      return sectorUp;
    }
    else if(window.scrollY > 1400 & window.scrollY <= 2128){
      setsectorUp(urlLink+'#skills');
      return sectorUp;
    }
    else if(window.scrollY > 2081 & window.scrollY <= 2703){
      setsectorUp(urlLink+'#projects');
      return sectorUp;
    }
    else if(window.scrollY > 2670 & window.scrollY <= 3134){
      setsectorUp(urlLink+'#task-pointer');
      return sectorUp;
    }
    else if(window.scrollY > 3092 & window.scrollY <= 3565){
      setsectorUp(urlLink+'#calculator');
      return sectorUp;
    }
    else if(window.scrollY > 3514 & window.scrollY <= 3996){
      setsectorUp(urlLink+'#form');
      return sectorUp;
    }
    else if(window.scrollY > 3936 & window.scrollY <= 4427){
      setsectorUp(urlLink+'#regex');
      return sectorUp;
    }
    else if(window.scrollY > 4359 & window.scrollY <= 4842){
      setsectorUp(urlLink+'#click-counter');
      return sectorUp;
    }
    else if(window.scrollY > 4765 & window.scrollY <= 5000){
      setsectorUp(urlLink+'#contact');
      return sectorUp;
    }
  }

  // is a function used to move up or down the section
  const sectorD = () => {
    if(window.scrollY > 300 & window.scrollY <= 631){
      setsectorDown(urlLink+'#skills');
      return sectorDown;
    }
    else if(window.scrollY > 631 & window.scrollY <= 1859){
      setsectorDown(urlLink+'#projects');
      return sectorDown;
    }
    // else if(window.scrollY > 1400 & window.scrollY <= 2081){
    //   setsectorDown(urlLink+'#contact');
    //   return sectorDown;
    // }
    else if(window.scrollY > 1859 & window.scrollY <= 2416){
      setsectorDown(urlLink+'#task-pointer');
      return sectorDown;
    }
    else if(window.scrollY > 2416 & window.scrollY <= 2802){
      setsectorDown(urlLink+'#calculator');
      return sectorDown;
    }
    else if(window.scrollY > 2802 & window.scrollY <= 3172){
      setsectorDown(urlLink+'#form');
      return sectorDown;
    }
    else if(window.scrollY > 3172 & window.scrollY <= 3541){
      setsectorDown(urlLink+'#regex');
      return sectorDown;
    }
    else if(window.scrollY > 3541 & window.scrollY <= 3911){
      setsectorDown(urlLink+'#click-counter');
      return sectorDown;
    }
    else if(window.scrollY > 3911 & window.scrollY <= 4264){
      setsectorDown(urlLink+'#contact');
      return sectorDown;
    }
    else if(window.scrollY > 4264 & window.scrollY <= 5000){
      setsectorDown(urlLink+'#footer');
      setActive();
      return sectorDown;
    }
  }


  return (
    <div className='App'>
      <header className='App__header' id='main'>
        <Nav
        urlLink={urlLink}
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
