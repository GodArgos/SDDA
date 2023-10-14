import InfoSolicitud from "./InfoSolicitud";
import BotonVerDetalle from "../../../components/BotonVerDetalle";
import "./BoxSolicitud.css";

export default function BoxSolicitud() {
    const id = 1;
    const url = "/J/solicitudes/" + id;

    return (
        <div className="Box" id="SolicitudDemanda">
            <div className="BoxSolicitudText">
                <InfoSolicitud
                    solicitud="45652"
                    demandante="aña"
                    demandado="owo"
                    tipo="Obligación de dar suma de dinero"
                />
            </div>
            <div className="BoxSolicitudBoton">
                <BotonVerDetalle url={url} />
            </div>
        </div>
    );
}
