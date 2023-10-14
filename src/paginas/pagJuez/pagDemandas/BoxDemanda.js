import InfoDemanda from "./InfoDemanda";
import BotonVerDetalle from "../../../components/BotonVerDetalle";
import "./BoxDemanda.css";

export default function BoxDemanda() {
    const id = 1;
    const url = "/J/demandas/" + id;

    return (
        <div className="Box" id="DemandaJuez">
            <div className="BoxDemandaText">
                <InfoDemanda
                    solicitud="1526"
                    demandante="Marco Quispe"
                    demandado="Erick Valderrama"
                    tipo="Obligación de dar suma de dinero"
                />
            </div>
            <div className="BoxDemandaBoton">
                <BotonVerDetalle url={url} />
            </div>
        </div>
    );
}
