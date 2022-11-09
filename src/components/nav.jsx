import React from "react";
import '../css/nav.css';
import menu from '../img/svg/bx-menu.svg';
import eks from '../img/eks.png';
import profile from '../img/julio.png';

function Nav(props) {
  

    return (
        <nav className="mobile">
          <div className="container__nav">
            <div className="container__img__perfil">
              <a className="link__perfil" href={window.location.pathname+'#main'}>
                <img src={profile} className='name__portfolio'/>
                <p className="navegation__bar desktop">Home</p>
              </a>
            </div>
            <div className="container__bar">
              <a className="desktop" href={props.urlLink+'#about-me'}><p className="navegation__bar">About me</p></a>
              <a className="desktop" href={props.urlLink+'#skills'}><p className="navegation__bar">Skills</p></a>
              <a className="desktop" href={props.urlLink+'#projects'}><p className="navegation__bar">Projects</p></a>
              <a className="desktop" href={props.urlLink+'#contact'}><p className="navegation__bar">Contact me</p></a>
              <a href="./CV English julio.pdf" download><p className="navegation__bar cv">Download CV</p></a>
            </div>
            <img className={`img__menu ${props.diss === 'dissemble'? '' : 'dissemble'}`} src={menu} alt="menu" title="menu"
             onClick={props.dissemble}/>
            <img className={`img__menu x ${props.diss === 'dissemble'? 'dissemble' : ''}`} src={eks} alt="menu" title="menu"
             onClick={props.dissemble}/>
          </div>
        </nav>
    );
}

export default Nav;