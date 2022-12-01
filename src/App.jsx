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
import Switch from './components/switch';
import { ThemeProvider } from 'styled-components';
import { Themes } from './components/styled/themes';
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

  const [switchTheme, setSwitchTheme] = useState('LightTheme')

  return (
  <ThemeProvider
  theme={Themes[switchTheme]}>
    <div className={`App ${switchTheme}`} >
      <header className='App__header' id='main'>
        <Nav
        urlLink={urlLink}
        diss = {dissemble}
        dissemble = {swap}
        setDissemble = {setDissemble}
        theme={switchTheme}/>
        <div className='container__presentation'>
          {/* button change of theme dark or light*/}
          <Switch 
          theme={switchTheme}
          setTheme={setSwitchTheme} />
          <div className='container__title'>
            <h1 className={`title__portfolio ${switchTheme == "LightTheme" ? "b":"w"}`}>Julio Rivas<br/> Front End Developer</h1>
          </div>
          <div className='container__img__pitch'>
            <img className='pitch' src={pitching} />
          </div>
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
        dissemble={dissemble} 
        theme={switchTheme} />
        <Skills
        theme={switchTheme} />
        <Projects 
        theme={switchTheme} />
        <Contact 
        theme={switchTheme} />
      </main>
      <footer className='footer' id='footer'>
          <div className='div__footer'>
            <a className='social__networks' href="https://www.linkedin.com/in/julio-rivas-frontend" target="_blank">
              <img align="center" width="40" height="40" title="Linkedin" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"/>
            </a>
            <a className='social__networks' href="https://www.instagram.com/julio_rivas17" target="_blank">
              <img align="center" width="40" heigth="40" title="Instagram" src="https://eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png"/>
            </a>
            <a className='social__networks' href="https://www.facebook.com/juliorivasz" target="_blank">
              <img align="center" width="40" heigth="40" title="Facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png"/>
            </a>
            <a className='social__networks' href="https://github.com/Juliorivasz" target="_blank">
              <img align="center" width="40" heigth="40" title="Githuh" src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png"/>
            </a>
            <p className='text__footer'>Julio A. Rivas Garcia. © Copyright 2022 - All rights reserved</p>
          </div>
      </footer>
      <a href='#top' className={active}>
        <div className='button__up'>
          <img className='button__up__2' src={up} alt="home up"/>
        </div>
      </a>
    </div>
  </ThemeProvider>
  );
}

export default App;
