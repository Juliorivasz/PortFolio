import React from "react";
import '../css/nav.css';
import menu from '../img/svg/bx-menu.svg';
import eks from '../img/eks.png';
import profile from '../img/julio.png';

function Nav(props) {
  

    return (
        <nav className="mobile">
          <div className="container__nav">
            <a className="link__perfil" href={window.location.pathname+'#main'}><img src={profile} className='name__portfolio'/></a>
            <img className={`img__menu ${props.diss === 'dissemble'? '' : 'dissemble'}`} src={menu} alt="menu" title="menu"
             onClick={props.dissemble}/>
            <img className={`img__menu x ${props.diss === 'dissemble'? 'dissemble' : ''}`} src={eks} alt="menu" title="menu"
             onClick={props.dissemble}/>
          </div>
        </nav>
    );
}

export default Nav;