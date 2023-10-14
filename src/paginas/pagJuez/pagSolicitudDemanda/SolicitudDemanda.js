import BoxSolicitud from "./BoxSolicitud";
import BannerJuez from "../../../components/BannerJuez";

export default function SolicitudDemanda(props) {
    const func = props.func;

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>Solicitudes</h1>
                <p>
                    En esta pestaña encontrará todas las solicitudes de demandas
                    que le han sido asignadas.
                </p>
                <BoxSolicitud />
            </div>
        </>
    );
}
