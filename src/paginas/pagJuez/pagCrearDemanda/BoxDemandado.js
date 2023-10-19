import React from "react";
import "./CrearDemanda.css";

const BoxDemandado = () => {
  return (
    <div className="C">
      <div className="right-box">
        Datos del Demandado
        <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" className="rounded-input" />
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" className="rounded-input" />
          </div>
          <div className="form-group">
            <label>Género:</label>
            <div className="radio-options">
              <input type="radio" id="genero-masculino" name="genero" value="masculino" />
              <label htmlFor="genero-masculino">Masculino</label>
              <input type="radio" id="genero-femenino" name="genero" value="femenino" />
              <label htmlFor="genero-femenino">Femenino</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dni">DNI:</label>
            <input type="text" id="dni" name="dni" className="rounded-input" />
          </div>
        </form>
      </div>
      </div>
      <div>
        <button className="reject-button">Rechazar</button>
        <button className="accept-button">Aceptar</button>
      </div>
    </div>
  );
};

export default BoxDemandado;
