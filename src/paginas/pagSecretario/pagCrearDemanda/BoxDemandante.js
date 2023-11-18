import React from "react";
import "./CrearDemanda.css";
import InfoDemandante from "./InfoDemandante";

const BoxDemandante = (props) => {
  const solicitud = props.solicitud;
  
  return (
    <div className="C">
      <div className="left-box">
        Datos del Demandante
        <div className="CajaDemandante">
          <div className="BoxDemandanteText">
            <InfoDemandante solicitud={solicitud}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDemandante;
