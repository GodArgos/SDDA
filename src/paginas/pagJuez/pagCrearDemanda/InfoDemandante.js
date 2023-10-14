export default function InfoDemandante(props){
    return(
        <div className="InfoDemandante">
            <p><b>Nombre:</b> {props.nombre}</p>
            <p><b>Apellidos:</b> {props.apellidos}</p>
            <p><b>Género:</b> {props.genero}</p>
            <p><b>DNI:</b> {props.dni}</p>
        </div>
    )
}