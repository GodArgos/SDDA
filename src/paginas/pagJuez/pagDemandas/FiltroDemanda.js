import React, { useState } from 'react';

function FiltroDemanda({ onFiltroChange }) {
  const [filtro, setFiltro] = useState([]);

  const handleChange = (event) => {
    const nuevoFiltro = event.target.value;
    setFiltro(nuevoFiltro);
    onFiltroChange(nuevoFiltro); 
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: "3%",
    }}>
      <span className='textFiltro'>Filtro:</span>
      <select className='select' value={filtro} onChange={handleChange} style={{
        backgroundColor: "grey",
        color:"white",
        width: "10%",
        borderRadius: 10,
        marginTop: "0.1rem"
      }}>
        <option value="0">Ninguno</option>
        <option value="1">Recibida</option>
        <option value="2">En proceso</option>
        <option value="3">Finalizada</option>
        <option value="4">Rechazada</option>
      </select>
    </div>
  );
}

export default FiltroDemanda;
