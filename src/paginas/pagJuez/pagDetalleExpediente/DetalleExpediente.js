import { useParams } from "react-router-dom";

import BannerJuez from "../../../components/BannerJuez";
import InfoDetalleExpediente from "./InfoDetalleExpediente";
import BoxInfReniec from "./infoReniec/BoxInfReniec";
import BoxInfSunarp from "./infoSunarp/BoxInfSunarp";
import BoxInfTrabajo from "./infoTrabajo/BoxInfTrabajo";
/* import BoxInfSecretario from "./infoSecretario/BoxInfSecretario"; */

export default function DetalleExpediente(props) {
    const func = props.func;
    const { dni } = useParams();

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>
                    Expediente <InfoDetalleExpediente dni={dni} />
                </h1>
                <p>
                    En esta pestaña encontrará toda la información referida al
                    expediente.
                </p>

                <div className="InfReniec">
                    <BoxInfReniec />
                </div>

                <div className="InfSunarp">
                    <BoxInfSunarp />
                </div>

                <div className="InfTrabajo">
                    <BoxInfTrabajo />
                </div>

                {/* <div className="InfSecretario">
                    <BoxInfSecretario />
                </div> */}
            </div>
        </>
    );
}
