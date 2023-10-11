import InfoInfAbogado from "./InfoInfAbogado";
import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandate() {
    return (
        <div id="InfPersona">
            <div className="Box">
                <h3>Información personal del demandante: </h3>
                <InfoInfAbogado
                    nombres="juan owo"
                    apellidos="lion sea"
                    dni="78964512"
                    direccion="ayuda"
                    sexo="non"
                    colegiatura="789654"
                />
                <br />
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
