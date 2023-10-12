import { useParams } from "react-router-dom";

import InfoDetalleExpediente from "./InfoDetalleExpediente";
import BoxInfObservacion from "./infoObservacion/BoxInfObservacion";
import BoxInfReniec from "./infoReniec/BoxInfReniec";
import BoxInfSunarp from "./infoSunarp/BoxInfSunarp";
import BoxInfTrabajo from "./infoTrabajo/BoxInfTrabajo";
import BoxInfSecretario from "./infoSecretario/BoxInfSecretario";

export default function DetalleExpediente() {

    const {dni} = useParams();

    return (
        <div className="Contenido">
            <h1>
                Expediente <InfoDetalleExpediente dni={dni} />
            </h1>
            <p>
                En esta pestaña encontrará toda la información referida al
                expediente.
            </p>

            <BoxInfObservacion />

            <div className="InfReniec">
                <BoxInfReniec />
            </div>

            <div className="InfSunarp">
                <BoxInfSunarp />
            </div>

            <div className="InfTrabajo">
                <BoxInfTrabajo />
            </div>

            <div className="InfSecretario">
                <BoxInfSecretario />
            </div>
        </div>
    );
}
