import InfoInfSunarp from "./InfoInfSunarp";
import BotonVerExpediente from "../../../../components/BotonVerExpediente";

export default function BoxInfSunarp() {
    return (
        <div id="InfSunarp">
            <div className="Box">
                <h3>Formulario Sunarp:</h3>
                <InfoInfSunarp
                    propiedad="7"
                    vehiculo="789625"
                    observacion="owowowowwo"
                />
                <BotonVerExpediente />
            </div>
        </div>
    );
}
