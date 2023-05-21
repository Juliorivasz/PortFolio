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
            <div className='container__title'>
              <h1 className={`title__portfolio ${theme === "LightTheme" ? "b br__black" : "w br__gray"}`}>Julio Rivas<br /> Front End Developer</h1>
            </div>
            <div className='container__img__pitch'>
              <img className='pitch' src={pitching} alt='pitching' />
            </div>
          </div>
     );
}

export default Home;