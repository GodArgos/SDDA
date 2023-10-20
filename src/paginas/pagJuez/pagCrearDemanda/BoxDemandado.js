import React from "react";
import "./CrearDemanda.css";

const BoxDemandado = ({ updateFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Transformar el género de texto a número
    let finalValue = value;
    if (name === "def_sexId") {
      switch (value) {
        case "masculino":
          finalValue = 1;
          break;
        case "femenino":
          finalValue = 2;
          break;
        case "otro":
          finalValue = 3;
          break;
        default:
          finalValue = value; // Por si acaso, aunque no debería llegar aquí
      }
    }

    updateFormData(name, finalValue);
  };

  return (
    <div className="C">
      <div className="right-box">
        Datos del Demandado
        <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="def_names" className="rounded-input" required onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="def_lastnames" className="rounded-input" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Género:</label>
            <div className="radio-options">
              <input type="radio" id="genero-masculino" name="def_sexId" value="masculino" onChange={handleChange}/>
              <label htmlFor="genero-masculino">Masculino</label>
              <input type="radio" id="genero-femenino" name="def_sexId" value="femenino" onChange={handleChange}/>
              <label htmlFor="genero-femenino">Femenino</label>
              <input type="radio" id="genero-otro" name="def_sexId" value="otro" onChange={handleChange}/>
              <label htmlFor="genero-otro">Otro</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="dni">DNI:</label>
            <input type="text" id="dni" name="def_dni" className="rounded-input" required onChange={handleChange}/>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default BoxDemandado;
