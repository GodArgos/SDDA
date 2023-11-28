import BotonURL from "../../../components/BotonURL";

export default function DemandaPN(props) {
    const id = props.infoDemanda.id;
    const url = "/P/misdemandas/" + id;
    const {infoDemanda} = props;
    console.log(infoDemanda)
    return(
        <div className="Box" id="DemandaJuez">
            <div className="BTexto" id="PN">
                <div className="InfoDemanda">
                    <p><b>Número de Demanda:</b> {infoDemanda.nro_demanda}</p>
                    <p><b>Demandante:</b> {infoDemanda.PersonaNatural.nombreCompleto}</p>
                    <p><b>Demandado:</b> {infoDemanda.Demandado.nombreCompleto}</p>
                </div>
            </div>
            <div className="BInfo">
                <p><b>Fecha de envío:</b> {infoDemanda.fecha_emision}</p>
                <p><b>Estado de Demanda:</b> {infoDemanda.EstadoDemanda.nombre}</p>
                <div className="BBotonPN">
                    <BotonURL url={url} texto={"Ver Detalle"}/>
                </div>
            </div>
        </div>
    );
}