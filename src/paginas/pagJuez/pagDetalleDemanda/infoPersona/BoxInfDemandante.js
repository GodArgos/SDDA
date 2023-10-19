import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandate(props) {
    const infoPersona = props.infoPersona;
    const dni = infoPersona.dni;

    return (
        <div className="Box">
            <h3>Información personal del demandante: </h3>
            INFORMACIÓN DEL DEMANDANTE:
            <InfoInfPersona infoPersona={infoPersona} rol="Demandante"/>
            <BotonVerExpediente dni={dni} />
        </div>
    );
}
