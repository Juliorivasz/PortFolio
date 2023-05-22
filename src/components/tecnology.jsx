import React from 'react';

function Tecnology({ route, nameAlt }) {
    return ( 
        <div className='container__tecnology'>
            <img src={route} alt={nameAlt} className='img__tecnology' />
            <p className='text__tecnology'>{nameAlt.toUpperCase()}</p>
        </div>
     );
}

export default Tecnology;