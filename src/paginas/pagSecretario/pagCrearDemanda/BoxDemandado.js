import React from "react";
import "./CrearDemanda.css";

const BoxDemandado = ({ updateFormData }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);
   
  };

  return (
    <div className="C">
      <div className="right-box">
        Datos del Demandado
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="dni">DNI:</label>
              <input 
                type="text" 
                id="dni" 
                name="def_dni" 
                className="rounded-input" 
                required 
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dem_descrip">Descripción:</label>
              <textarea 
                id="dem_descrip" 
                name="dem_descrip" 
                className="rounded-input" 
                onChange={handleChange}
                rows="4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoxDemandado;
