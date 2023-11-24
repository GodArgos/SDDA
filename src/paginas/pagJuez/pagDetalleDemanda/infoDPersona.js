import BotonURL from "../../../components/BotonURL";

export default function InfoDPersona(props) {
    const infoPersona = props.infoPersona;
    const rol = props.rol;
    const url = "/J/expedientes/" + infoPersona.dni;

    const opcionesGenero = ["Masculino", "Femenino", "Otro"];

    function generoTexto(valor) {
        return opcionesGenero[valor-1]
    }

    return (
        <div className="Box">
            <div className="BTexto">
                <h3>Información Personal del {rol==="demandado"? "Demandado" : "Demandante"} </h3>
                <p>Nombres: {infoPersona.nombres}</p>
                <p>Apellidos: {infoPersona.apellidos}</p>
                <p>DNI: {infoPersona.dni}</p>
                {rol === "Demandado" ? <p>Dirección: {infoPersona.direccion}</p> : <></>}
                <p>Sexo: {generoTexto(infoPersona.sexoId)}</p>
            </div>
            <div className="BBoton">
                <BotonURL url={url} texto="Ver Expediente"/>
            </div>
        </div>
    );
}