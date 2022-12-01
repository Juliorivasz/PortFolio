import React from "react";
import '../css/nav.css';
import menu from '../img/svg/bx-menu.svg';
import eks from '../img/eks.png';
import profile from '../img/julio.png';
import { useState } from "react";

function Nav({ urlLink, diss, dissemble,theme, setDissemble }) {

  const [changes, setChanges] = useState("not-active")

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
    setDissemble('dissemble')
    
  }
    return (
        <nav className={`mobile ${theme}`}>
          <div className="container__nav">
            <div className="container__img__perfil">
              <a className="link__perfil" href={window.location.pathname+'#main'}>
                <img src={profile} className={`name__portfolio`} onClick={changesImg}/>
                <p className="navegation__bar desktop">Home</p>
              </a>
            </div>
            <div className="container__bar">
              <a className="desktop" href={urlLink+'#about-me'}><p className="navegation__bar">About me</p></a>
              <a className="desktop" href={urlLink+'#skills'}><p className="navegation__bar">Skills</p></a>
              <a className="desktop" href={urlLink+'#projects'}><p className="navegation__bar">Projects</p></a>
              <a className="desktop" href={urlLink+'#contact'}><p className="navegation__bar">Contact me</p></a>
              <a href="./CV Spanish julio.pdf" download><p className="navegation__bar cv">Download CV</p></a>
            </div>
            <div className={`btn__menu ${changes}`} onClick={changesMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {/* <img className={`img__menu ${diss === 'dissemble'? '' : 'dissemble'}`} src={menu} alt="menu" title="menu"
             onClick={dissemble}/>
            <img className={`img__menu x ${diss === 'dissemble'? 'dissemble' : ''}`} src={eks} alt="menu" title="menu"
             onClick={dissemble}/> */}
          </div>
        </nav>
    );
}

export default Nav;