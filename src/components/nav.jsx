import React from "react";
import '../css/nav.css';
import menu from '../img/svg/bx-menu.svg';

function Nav(props) {
  

    return (
        <nav className="mobile">
          <div className="container__nav">
            <a href={window.location.pathname+'#main'}><h2 className='name__portfolio'>Julio Rivas</h2></a>
            <img className={`img__menu`} src={menu} alt="menu" title="menu"
             onClick={props.dissemble}/>
          </div>
        </nav>
    );
}

export default Nav;