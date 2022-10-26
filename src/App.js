import { useState } from 'react';
import './App.css';
import AboutMe from './components/about_me';
import Contact from './components/contact';
import Nav from './components/nav';
import Projects from './components/projects';
import Skills from './components/skills';
import down from './img/svg/bxs-chevron-down.svg';
import pitching from './img/svg/pitching.png';

function App() {

  const [dissemble, setDissemble] = useState('dissemble');

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
        <section className=''>
          <div>
            
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
