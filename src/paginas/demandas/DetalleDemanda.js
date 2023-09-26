export default function DetalleDemanda(props){
    return(
        <div className="DetalleDemanda">
            <p><b>Nro Solicitud:</b> {props.solicitud}</p>
            <p><b>Demandante:</b> {props.demandante}</p>
            <p><b>Demandado:</b> {props.demandado}</p>
            <p><b>Tipo:</b> {props.tipo}</p>
            
        </div>
    )
}