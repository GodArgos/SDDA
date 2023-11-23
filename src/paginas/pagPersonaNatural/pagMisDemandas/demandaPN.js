import BotonURL from "../../../components/BotonURL";

export default function DemandaPN(props) {
    const id = props.infoDemanda.id;
    const url = "/P/misdemandas/" + id;
    const {infoDemanda} = props;

    return(
        <div className="Box" id="DemandaJuez">
            <div className="BTexto">
                <div className="InfoDemanda">
                    <p><b>Número de Demanda:</b> {infoDemanda.nro_demanda}</p>
                    <p><b>Demandante:</b> {infoDemanda.PersonaNatural.nombreCompleto}</p>
                    <p><b>Demandado:</b> {infoDemanda.Demandado.nombreCompleto}</p>
                </div>
            </div>      
            <p><b>Estado de Demanda:</b> {infoDemanda.EstadoDemanda.nombre}</p>
            {/* <div className="BBoton">
                <BotonURL url={url} texto={"Ver Detalle"}/>
            </div> */}
        </div>
    );
}