import InfoSolicitud from "./InfoSolicitud";
import BotonVerDetalle from "../../../components/BotonVerDetalle";
import "./BoxSolicitud.css";

export default function BoxSolicitud(props) {
    const id = props.infoSolicitud.id;
    const url = "/J/solicitudes/" + id;
    const infoSolicitud = props.infoSolicitud;

    return (
        <div className="Box" id="SolicitudDemanda">
            <div className="BoxSolicitudText">
                <InfoSolicitud infoSolicitud={infoSolicitud}/>
            </div>
            <div className="BoxSolicitudBoton">
                <BotonVerDetalle url={url} />
            </div>
        </div>
    );
}
