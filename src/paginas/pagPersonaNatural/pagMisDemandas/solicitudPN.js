import BotonURL from "../../../components/BotonURL";

export default function SolicitudPN (props){
    const {infoDemanda} = props;
    const id = infoDemanda.id;
    const url = "/P/misolicitud/" + id;

    return(
        <div className="Box">
            <div className="BTexto" id="PN">
                <div className="InfoDemanda">
                    <p><b>Número de Solicitud:</b> {infoDemanda.nro_solicitud}</p>                   
                    <p><b>Demandante:</b> {infoDemanda.PersonaNatural.nombreCompleto}</p>
                    <p><b>Fecha de envío:</b> {infoDemanda.fecha_emision}</p>
                </div>
            </div>
            <div className="BInfo">
                <p><b>Estado de Solicitud:</b> 
                    {infoDemanda.comentario === null ? " POR REVISAR" : " RECHAZADA"}
                </p>
                <br/>
                <div className="BBotonPN">
                    <BotonURL url={url} texto={"Ver Detalle"}/>
                </div>
            </div>
        </div>
    )
}