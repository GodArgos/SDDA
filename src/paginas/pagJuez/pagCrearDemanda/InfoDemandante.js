export default function InfoDemandante(props){
    const solicitud = props.solicitud;
    const opcionesGenero = ["Masculino", "Femenino", "Otro"];

    function generoTexto(valor) {
        return opcionesGenero[valor-1]
    }

    return(
        <div className="InfoDemandante">
            <p><b>Nombre:</b> {solicitud.PersonaNatural.nombres}</p>
            <p><b>Apellidos:</b> {solicitud.PersonaNatural.apellidos}</p>
            <p><b>Género:</b> {generoTexto(solicitud.PersonaNatural.sexoId)}</p>
            <p><b>DNI:</b> {solicitud.PersonaNatural.dni}</p>
        </div>
    )
}