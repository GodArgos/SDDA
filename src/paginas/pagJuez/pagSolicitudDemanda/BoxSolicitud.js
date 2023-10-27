import InfoSolicitud from "./InfoSolicitud";
import BotonURL from "../../../components/BotonURL";

export default function BoxSolicitud(props) {
    const id = props.infoSolicitud.id;
    const url = "/J/solicitudes/" + id;
    const infoSolicitud = props.infoSolicitud;

    return (
        <div className="Box" id="SolicitudDemanda">
            <div className="BTexto">
                <InfoSolicitud infoSolicitud={infoSolicitud}/>
            </div>
            <div className="BBoton">
                <BotonURL url={url} texto={"Ver Solicitud"}/>
            </div>
        </div>
    );
}
