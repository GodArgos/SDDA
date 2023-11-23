export default function InfoMDGeneral(props){
    const infoDemanda = props.infoDemanda;
    const estadosDemanda = ["Recibida","En Proceso","Finalizada","Rechazada"];

    function generarTextoEstado(valor){
        return(estadosDemanda[valor-1]);
    }

    return(
        <div className="Box">
            <div className="BTexto">
                <p>Descripcion: {infoDemanda.descripcion}</p>
                <p><b>Fecha de emision:</b> {infoDemanda.fecha_emision}</p>
                {infoDemanda.fecha_audiencia && (
                    <p><b>Fecha de Audiencia:</b> {infoDemanda.fecha_audiencia}</p>
                )}
                <p><b>Estado de Demanda:</b> {generarTextoEstado(infoDemanda.estadoDemandaId)}</p>
            </div>
        </div>
    )
}