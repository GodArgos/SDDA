export default function InfoInfSecretario(props){
    return(
        <div className="InfoInfSecretario">
            <p> Nombres: {props.nombres}</p>
            <p> Apellidos: {props.apellidos}</p>
            <p> DNI: {props.dni}</p>
            <p> Sexo: {props.sexo}</p>
            <p> colegiatura: {props.colegiatura}</p>
        </div>
    )
}