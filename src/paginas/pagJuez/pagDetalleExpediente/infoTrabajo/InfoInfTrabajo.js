export default function InfoInfTrabajo(props){
    return(
        <div className="InfoInfTrabajo">
            <p> Lugar de Trabajo: {props.trabajo}</p>
            <p> RUC Lugar de Trabajo: {props.ruc}</p>
            <p> Monto Ingreso: {props.ingreso}</p>
            <p> Observaciones: {props.observacion}</p>
        </div>
    )
}