export default function InfoSolicitud(props){
    const infoSolicitud = props.infoSolicitud;

    return(
        <div className="InfoSolicitud">
            <p><b>Número de Solicitud:</b> {infoSolicitud.nro_solicitud}</p>
            <p><b>Demandante:</b> {infoSolicitud.PersonaNatural.nombreCompleto}</p>         
        </div>
    )
}