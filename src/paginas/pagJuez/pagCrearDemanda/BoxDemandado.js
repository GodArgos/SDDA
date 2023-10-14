import React from 'react';
import "./CrearDemanda.css"

const BoxDemandado = () => {
  return (
    <div className='C'>
    <div className="right-box">Demandado Datos</div>
    <div>
        <button className="reject-button">Rechazar</button>
        <button className="accept-button">Aceptar</button>
      </div>
    </div>
  );
}

export default BoxDemandado;
