import React, { useState } from 'react';

function FiltroDemanda({ onFiltroChange }) {
  const [filtro, setFiltro] = useState([]);

  const handleChange = (event) => {
    const nuevoFiltro = event.target.value;
    setFiltro(nuevoFiltro);
    onFiltroChange(nuevoFiltro); 
  };

  return (
    <div>
      <select value={filtro} onChange={handleChange}>
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
