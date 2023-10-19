import InfoDemanda from "./InfoDemanda";
import BotonVerDetalle from "../../../components/BotonVerDetalle";
import "./BoxDemanda.css";

export default function BoxDemanda(props) {
    const id = props.infoDemanda.id;
    const url = "/J/demandas/" + id;
    const infoDemanda = props.infoDemanda;

    return (
        <div className="Box" id="DemandaJuez">
            <div className="BoxDemandaText">
                <div className="InfoDemanda">
                    <InfoDemanda infoDemanda={infoDemanda} />   
                </div>
            </div>
            <div className="BoxDemandaBoton">
                <BotonVerDetalle url={url} />
            </div>
        </div>
    );
}
