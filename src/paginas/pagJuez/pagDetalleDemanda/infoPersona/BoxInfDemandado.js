import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandado(props) {
    const infoPersona = props.infoPersona;
    const dni = infoPersona.dni;

    return (
        <div className="Box">
            <h3>Información personal del demandado: </h3>
            INFORMACIÓN DEL DEMANDADO:
            <InfoInfPersona infoPersona={infoPersona} rol="Demandado"/>
            <BotonVerExpediente dni={dni} />
        </div>
    );
}
