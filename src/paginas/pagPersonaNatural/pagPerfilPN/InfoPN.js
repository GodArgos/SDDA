export default function InfoJuez(props){
    return(
        <div className="Info">
            <p><b>Nombre:</b> {props.nombre}</p>
            <p><b>Apellidos:</b> {props.apellidos}</p>
            <p><b>Género:</b> {props.genero}</p>
            <p><b>DNI:</b> {props.dni}</p>
            <br/>
            <p><b>Usuario:</b> {props.usuario}</p>
            <p><b>Contraseña:</b> ********</p>
        </div>
    )
}