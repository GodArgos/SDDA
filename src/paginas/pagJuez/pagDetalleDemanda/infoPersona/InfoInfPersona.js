export default function InfoInfPersona(props){
    const infoPersona = props.infoPersona;
    const rol = props.rol;

    const opcionesGenero = ["Masculino", "Femenino", "Otro"];

    function generoTexto(valor) {
        return opcionesGenero[valor-1]
    }

    return(
        <div className="InfoInfPersona">
            <p>Nombres: {infoPersona.nombreCompleto}</p>
            <p>Apellidos: {infoPersona.apellidos}</p>
            <p>DNI: {infoPersona.dni}</p>
            {rol === "Demandado" ? <p>Dirección: {infoPersona.direccion}</p> : <></>}
            <p>Sexo: {generoTexto(infoPersona.sexoId)}</p>
        </div>
    )
}