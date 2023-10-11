export default function InfoInfReniec(props){
    return(
        <div className="InfoInfReniec">
            <p> Nombres: {props.nombres}</p>
            <p> Apellidos: {props.apellidos}</p>
            <p> DNI: {props.dni}</p>
            <p> Dirección: {props.direccion}</p>
            <p> Sexo: {props.sexo}</p>
            <p> Estado Civil: {props.civil}</p>
            <p> Grado de Instrucción: {props.grado}</p>
        </div>
    )
}