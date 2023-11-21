interface TecnologyProps {
  route: string;
  nameAlt: string;
}

function Tecnology({ route, nameAlt }: TecnologyProps) {
    return ( 
        <div className='container__tecnology'>
            <img src={route} alt={nameAlt} className='img__tecnology' />
            <p className='text__tecnology'>{nameAlt.toUpperCase()}</p>
        </div>
     );
}

export default Tecnology;