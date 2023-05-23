import React from 'react';
import Switch from './switch';
import pitching from '../img/svg/pitching.png';

function Home({ theme, setTheme }) {
  return (
    <div className={`container__presentation ${theme === "LightTheme" ? "bg__gray" : "bg__black"}`}>
      {/* button change of theme dark or light*/}
      <Switch
        theme={theme}
        setTheme={setTheme} />
      <div className="container__home">
        <div className="container__home__title">
          <div className='container__title'>
            <h1 className={`title__portfolio ${theme === "LightTheme" ? "b" : "w"}`}>Julio Rivas</h1>
            <h2 className={`subtitle__portfolio ${theme === "LightTheme" ? "b br__black" : "w br__gray"}`}>Front End Developer</h2>
          </div>
          <p className={`text__portfolio ${theme === "LightTheme" ? "b" : "w"}`}>Desarrollador front-end dedicado a crear experiencias web interactivas y eficientes para mejorar la usabilidad y satisfacción del usuario.</p>
          <ul className='list__social'>
            <li>
              <a className='social__networks' href="https://www.linkedin.com/in/julio-rivas-frontend" target="_blank" rel='noreferrer'>
                <img className='img__social__networks' align="center" width="40" height="40" title="Linkedin" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt='Linkedin' />
              </a>
            </li>
            <li>
              <a className='social__networks' href="https://www.instagram.com/julio_rivas17" target="_blank" rel='noreferrer'>
                <img className='img__social__networks' align="center" width="40" heigth="40" title="Instagram" src="https://eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png" alt='Instagram' />
              </a>
            </li>
            <li>
              <a className='social__networks' href="https://www.facebook.com/juliorivasz" target="_blank" rel='noreferrer'>
                <img className='img__social__networks' align="center" width="40" heigth="40" title="Facebook" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt='Facebook' />
              </a>
            </li>
            <li>
              <a className='social__networks' href="https://github.com/Juliorivasz" target="_blank" rel='noreferrer'>
                <img className='img__social__networks' align="center" width="40" heigth="40" title="Githuh" src="https://assets.ifttt.com/images/channels/2107379463/icons/monochrome_large.png" alt='GitHub' />
              </a>
            </li>
            <li id='download__cv__home'>
              <a href="./Julio Rivas Front End Developer.pdf" download><p className={`navegation__bar ${theme === "LightTheme" ? "cv" : "cv__dark" }`}>Download CV</p></a>
            </li>
          </ul>
        </div>
        <div className='container__img__pitch'>
          <img className='pitch' src={pitching} alt='pitching' />
        </div>
      </div>
    </div>
  );
}

export default Home;