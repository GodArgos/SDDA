import InfoInfTrabajo from "./InfoInfTrabajo";
import BotonVerExpediente from "../../components/BotonVerExpediente";

export default function BoxInfTrabajo() {
    return (
        <div id="InfTrabajo">
            <div className="Box">
                <h3>Formulario Min. Trabajo:</h3>
                <InfoInfTrabajo
                    trabajo="no trabajo"
                    ruc="786413"
                    ingreso="45896"
                    observacion="owowowowwo"
                />
                <BotonVerExpediente />
            </div>
        </div>
    );
}
