export default function InfoMDGeneral(props){
    const infoDemanda = props.infoDemanda;
    const estadosDemanda = ["Recibida", "En Proceso", "Finalizada", "Rechazada"];
    console.log(infoDemanda)

    function generarTextoEstado(valor){
        return(estadosDemanda[valor - 1]);
    }

    return (
        <div className="Box">
            <div className="BTexto" id="BInfoDemanda">
                <p><b>Descripción:</b> {infoDemanda.descripcion}</p>
                <p><b>Fecha de emisión:</b> {infoDemanda.fecha_emision}</p>
                {infoDemanda.fecha_audiencia && (
                    <p><b>Fecha de Audiencia:</b> {infoDemanda.fecha_audiencia}</p>
                )}
                <p><b>Estado de Demanda:</b> {generarTextoEstado(infoDemanda.estadoDemandaId)}</p>
                {infoDemanda.estadoDemandaId === 4 && infoDemanda.comentario && (
                    <p><b>Comentario de Rechazo:</b> {infoDemanda.comentario}</p>
                )}
            </div>
        </div>
    )
}
