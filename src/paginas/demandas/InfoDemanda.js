export default function InfoDemanda(props){
    return(
        <div className="InfoDemanda">
            <p><b>Nro Solicitud:</b> {props.solicitud}</p>
            <p><b>Demandante:</b> {props.demandante}</p>
            <p><b>Demandado:</b> {props.demandado}</p>
            <p><b>Tipo:</b> {props.tipo}</p>
            
        </div>
    )
}