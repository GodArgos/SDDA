export default function InfoInfGen(props){
    return(
        <div className="InfoInfGen">
            <p>Descripcion: {props.descripcion}</p>
            <p>Fecha de emision: {props.fecha}</p>
        </div>
    )
}