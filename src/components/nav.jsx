import React from "react";
import '../css/nav.css';
import home from '../img/svg/home.svg';
import home2 from '../img/svg/home-2.svg';

function Nav({ urlLink, diss, dissemble, theme, setDissemble, changes, setChanges }) {

  const changesMenu = ()=>{
    if(changes === "not-active" && diss==="dissemble"){
      setChanges("active")
      dissemble()
    }else if(changes==="active" && diss===""){
      setChanges("not-active")
      dissemble()
    }
  }

  const changesImg = ()=>{
    setChanges("not-active");
    setDissemble('dissemble');
  }
    return (
        <nav className={`mobile ${theme === 'LightTheme' ? 'gradient__bot' : 'gradient__top'}`}>
          <div className="container__nav">
            <div className="container__img__perfil">
              <a className="link__perfil" href={window.location.pathname+'#main'}>
                <img src={theme === 'LightTheme' ? home : home2} className={`name__portfolio`} onClick={changesImg} alt='Home'/>
                <p className={`navegation__bar desktop ${theme === "LightTheme" ? "b" : "w"}`}>Home</p>
              </a>
            </div>
            <div className="container__bar">
              <a className="desktop" href={urlLink+'#about-me'}><p className={`navegation__bar ${theme === "LightTheme" ? "b" : "w"}`}>About me</p></a>
              <a className="desktop" href={urlLink+'#skills'}><p className={`navegation__bar ${theme === "LightTheme" ? "b" : "w"}`}>Skills</p></a>
              <a className="desktop" href={urlLink+'#projects'}><p className={`navegation__bar ${theme === "LightTheme" ? "b" : "w"}`}>Projects</p></a>
              <a className="desktop" href={urlLink+'#contact'}><p className={`navegation__bar ${theme === "LightTheme" ? "b" : "w"}`}>Contact me</p></a>
              <a href="./Julio Rivas Front End Developer.pdf" download><p className={`navegation__bar cv ${theme === "LightTheme" ? "b" : "w"}`}>Download CV</p></a>
            </div>
            <div className={`btn__menu ${changes}`} onClick={changesMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
    );
}

export default Nav;