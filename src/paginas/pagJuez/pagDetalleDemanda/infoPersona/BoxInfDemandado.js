import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandado() {

    const dni = "12345678";

    return (
        <div className="Box">
            <h3>Información personal del demandado: </h3>
            
            INFORMACIÓN DEL DEMANDADO:
            <InfoInfPersona
                nombres="ayuda"
                apellidos="pls"
                dni={dni}
                direccion="nose mano ayuda"
                sexo="uwu"
            />
            <BotonVerExpediente dni={dni}/>
        </div>
    );
}
