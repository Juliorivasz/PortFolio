import { useState } from 'react';
import './App.css';
import './css/animate.css';
import AboutMe from './components/about_me';
import Contact from './components/contact';
import Nav from './components/nav';
import Projects from './components/projects';
import Skills from './components/skills';
import pitching from './img/svg/pitching.png';
import Switch from './components/switch';
import whatsapp from './img/whatsapp.png';
import { ThemeProvider } from 'styled-components';
import { Themes } from './components/styled/themes';

function App() {

  const [changes, setChanges] = useState("not-active");
  const [dissemble, setDissemble] = useState('dissemble');
  // const [active, setActive ] = useState('dissemble');
  const urlLink = window.location.pathname;
  // document.addEventListener("scroll",(function(){window.scrollY>=window.innerHeight/2? setActive('') : setActive('dissemble')}));

  const swap = () => {
    if(dissemble === 'dissemble'){
      setChanges('active');
      setDissemble('');
    }else{
      setDissemble('dissemble');
      setChanges('not-active');
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
        theme={switchTheme}
        changes={changes}
        setChanges={setChanges} />
        <div className={`container__presentation ${switchTheme === "LightTheme" ? "bg__gray" : "bg__black"}`}>
          {/* button change of theme dark or light*/}
          <Switch 
          theme={switchTheme}
          setTheme={setSwitchTheme} />
          <div className='container__title'>
            <h1 className={`title__portfolio ${switchTheme === "LightTheme" ? "b br__black":"w br__gray"}`}>Julio Rivas<br/> Front End Developer</h1>
          </div>
          <div className='container__img__pitch'>
            <img className='pitch' src={pitching} alt='pitching'/>
          </div>
        </div>
        <section className={`menu__mobile ${dissemble} ${switchTheme === 'LightTheme' ? 'gradient__top' : 'gradient__bot'}`}>
          <ul className='list__nav'>
              <a href={`${window.location.pathname+'#about-me'}`} onClick={swap} ><li className={`item__list ${switchTheme === "LightTheme" ? "w" : "b"}`}>About Me</li></a>
              <a href={`${window.location.pathname+'#skills'}`} onClick={swap}><li className={`item__list ${switchTheme === "LightTheme" ? "w" : "b"}`}>Skills</li></a>
              <a href={`${window.location.pathname+'#projects'}`} onClick={swap}><li className={`item__list ${switchTheme === "LightTheme" ? "w" : "b"}`}>Projects</li></a>
              <a href={`${window.location.pathname+'#contact'}`} onClick={swap}><li className={`item__list ${switchTheme === "LightTheme" ? "w" : "b"}`}>Contact me</li></a>
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
            <a className='social__networks' href="https://www.linkedin.com/in/julio-rivas-frontend" target="_blank" rel='noreferrer'>
              <img className='img__social__networks' align="center" width="40" height="40" title="Linkedin" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt='Linkedin'/>
            </a>
            <a className='social__networks' href="https://www.instagram.com/julio_rivas17" target="_blank" rel='noreferrer'>
              <img className='img__social__networks' align="center" width="40" heigth="40" title="Instagram" src="https://eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png" alt='Instagram'/>
            </a>
            <a className='social__networks' href="https://www.facebook.com/juliorivasz" target="_blank" rel='noreferrer'>
              <img className='img__social__networks' align="center" width="40" heigth="40" title="Facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt='Facebook'/>
            </a>
            <a className='social__networks' href="https://github.com/Juliorivasz" target="_blank" rel='noreferrer'>
              <img className='img__social__networks' align="center" width="40" heigth="40" title="Githuh" src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png" alt='GitHub'/>
            </a>
            <p className='text__footer'>Julio A. Rivas Garcia. © Copyright 2022 - All rights reserved</p>
          </div>
      </footer>
      <a href='https://bit.ly/Juliorivasdev' target="_blank" rel="noreferrer">
        <div className='button__ws'>
          <img className='button__ws__2' src={whatsapp} alt="whatsapp"/>
        </div>
      </a>
    </div>
  </ThemeProvider>
  );
}

export default App;
