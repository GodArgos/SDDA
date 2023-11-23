import InfoInfPersona from "./InfoInfPersona";
import BotonURL from "../../../../components/BotonURL";
import "./BoxInfPersona.css";

export default function BoxInfDemandate(props) {
    const infoPersona = props.infoPersona;
    const dni = infoPersona.dni;
    const url = "/J/expedientes/" + dni;

    return (
        <div className="Box">
            <div className="BTexto">
                <h3>Información personal del demandante: </h3>
                <InfoInfPersona infoPersona={infoPersona} rol="Demandante"/>
            </div>
            <div className="BBoton">
                <BotonURL url={url} texto={"Ver Expediente"} />
            </div>
        </div>
    );
}
