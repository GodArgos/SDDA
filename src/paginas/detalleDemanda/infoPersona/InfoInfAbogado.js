export default function InfoInfAbogado(props){
    return(
        <div className="InfoInfAbogado">
            INFORMACIÓN DEL ABOGADO ENCARGADO:
            <p>Nombres: {props.nombres}</p>
            <p>Apellidos: {props.apellidos}</p>
            <p>DNI: {props.dni}</p>
            <p>Dirección: {props.direccion}</p>
            <p>Sexo: {props.sexo}</p>
            <p>Nro de colegiatura: {props.colegiatura}</p>
        </div>
    )
}