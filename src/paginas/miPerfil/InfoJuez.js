export default function InfoJuez(props){
    return(
        <div className="InfoJuez">
            <p><b>Nombre:</b> {props.nombre}</p>
            <p><b>Apellidos:</b> {props.apellidos}</p>
            <p><b>Género:</b> {props.genero}</p>
            <p><b>DNI:</b> {props.dni}</p>
            <p><b>Número de Colegiatura:</b> {props.nroCol}</p>
            <p><b>Dirección de Juzgado:</b> {props.dirJuz}</p>
            <br/>
            <p><b>Usuario:</b> {props.usuario}</p>
            <p><b>Contraseña:</b> ********</p>
        </div>
    )
}