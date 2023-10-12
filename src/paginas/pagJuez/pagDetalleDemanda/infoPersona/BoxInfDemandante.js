import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandate() {
    return (
        <div id="InfPersona">
            <div className="Box">
                <h3>Información personal del demandante: </h3>
                
                INFORMACIÓN DEL DEMANDANTE:
                <InfoInfPersona
                    nombres="owo"
                    apellidos="rescue cat"
                    dni="78964512"
                    direccion="no"
                    sexo="descubrelo"
                />
                <BotonVerExpediente />
            </div>
        </div>
    );
}
