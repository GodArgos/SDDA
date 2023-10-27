import InfoDemanda from "./InfoDemanda";
import BotonURL from "../../../components/BotonURL";

export default function BoxDemanda(props) {
    const id = props.infoDemanda.id;
    const url = "/J/demandas/" + id;
    const infoDemanda = props.infoDemanda;

    return (
        <div className="Box" id="DemandaJuez">
            <div className="BTexto">
                <div className="InfoDemanda">
                    <InfoDemanda infoDemanda={infoDemanda} />   
                </div>
            </div>
            <div className="BBoton">
                <BotonURL url={url} texto={"Ver Detalle"}/>
            </div>
        </div>
    );
}
