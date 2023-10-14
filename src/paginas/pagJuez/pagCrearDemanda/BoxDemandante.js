import React from "react";
import "./CrearDemanda.css";
import InfoDemandante from "./InfoDemandante";

const BoxDemandante = () => {
  return (
    <div className="C">
      <div className="left-box">
        Demandante Datos
        <div className="CajaDemandante">
          <div className="BoxDemandanteText">
            <InfoDemandante
              nombre="Rasec"
              apellidos="Rafael"
              genero="si ,por favor"
              dni="69696"
            />
          </div>
        </div>
      </div>
      <button className="download-button">Descargar PDF</button>
    </div>
  );
};

export default BoxDemandante;
