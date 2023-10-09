import InfoInfAbogado from "./InfoInfAbogado";
import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandado() {
    return (
        <div id="InfPersona">
            <div className="Box">
                <h3>Información personal del demandado: </h3>
                <InfoInfAbogado
                    nombres="Mike owo"
                    apellidos="Guillen"
                    dni="78964512"
                    direccion="nose mano ayuda"
                    sexo="macho pecho peludo"
                    colegiatura="789654"
                />
                <br />
                INFORMACIÓN DEL DEMANDADO:
                <InfoInfPersona
                    nombres="ayuda"
                    apellidos="pls"
                    dni="78964512"
                    direccion="nose mano ayuda"
                    sexo="uwu"
                />
                <BotonVerExpediente />
            </div>
        </div>
    );
}
