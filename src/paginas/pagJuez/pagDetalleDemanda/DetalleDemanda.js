import { useParams } from "react-router-dom";

import BoxDetalleDemanda from "./infoGeneral/BoxInfGen";
import InfoDetalleDemanda from "./InfoDetalleDemanda";
import BoxInfDemandate from "./infoPersona/BoxInfDemandante";
import BoxInfDemandado from "./infoPersona/BoxInfDemandado";

export default function DetalleDemanda() {

    const {id} = useParams();
    return (
        <div className="Contenido">
            <h1>
                Demanda <InfoDetalleDemanda solicitud={id} />
            </h1>

            <p>
                En esta pestaña encontrará toda la información referida a la
                demanda <InfoDetalleDemanda solicitud={id} />.
            </p>

            <BoxDetalleDemanda />

            <div className="InfDemandante">
                <BoxInfDemandate />
            </div>
            <div className="InfDemandado">
                <BoxInfDemandado />
            </div>
        </div>
    );
}
