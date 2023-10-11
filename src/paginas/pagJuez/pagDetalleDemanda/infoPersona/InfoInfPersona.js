export default function InfoInfPersona(props){
    return(
        <div className="InfoInfPersona">
            <p>Nombres: {props.nombres}</p>
            <p>Apellidos: {props.apellidos}</p>
            <p>DNI: {props.dni}</p>
            <p>Dirección: {props.direccion}</p>
            <p>Sexo: {props.sexo}</p>
        </div>
    )
}