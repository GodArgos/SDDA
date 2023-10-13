import { useParams } from "react-router-dom";

import BannerJuez from "../../../components/BannerJuez";
import BoxDetalleDemanda from "./infoGeneral/BoxInfGen";
import InfoDetalleDemanda from "./InfoDetalleDemanda";
import BoxInfDemandate from "./infoPersona/BoxInfDemandante";
import BoxInfDemandado from "./infoPersona/BoxInfDemandado";

export default function DetalleDemanda(props) {
    const func = props.func;
    const {id} = useParams();
    return (
        <>
            <BannerJuez func={func}/>
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
        </>
    );
}
