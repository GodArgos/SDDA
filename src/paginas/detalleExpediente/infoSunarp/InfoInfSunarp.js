export default function InfoInfSunarp(props){
    return(
        <div className="InfoInfSunarp">
            <p> Nro de propiedades: {props.propiedad}</p>
            <p> Nro de vehiculo: {props.vehiculo}</p>
            <p> Observaciones: {props.observacion}</p>
        </div>
    )
}