import React from 'react';
import whatsapp from '../img/whatsapp.png';

function Whatsapp() {
    return (
        <a href='https://bit.ly/Juliorivasdev' target="_blank" rel="noreferrer">
            <div className='button__ws'>
                <img className='button__ws__2' src={whatsapp} alt="whatsapp" />
            </div>
        </a>
    );
}

export default Whatsapp;