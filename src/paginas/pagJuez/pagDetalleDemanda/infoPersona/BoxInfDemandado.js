import InfoInfPersona from "./InfoInfPersona";
import BotonURL from "../../../../components/BotonURL";
import "./BoxInfPersona.css";

export default function BoxInfDemandado(props) {
    const infoPersona = props.infoPersona;
    const dni = infoPersona.dni;
    const url = "/J/expedientes/" + dni;

    return (
        <div className="Box">
            <div className="BTexto">
                <h3>Información personal del demandado: </h3>
                INFORMACIÓN DEL DEMANDADO:
                <InfoInfPersona infoPersona={infoPersona} rol="Demandado"/>
            </div>
            <div className="BBoton">
                <BotonURL url={url} texto={"Ver Expediente"} />
            </div>
        </div>
    );
}
