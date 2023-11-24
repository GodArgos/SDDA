import InfoDemanda from "./InfoDemanda";
import BotonURL from "../../../components/BotonURL";
import BotonFecha from "../../../components/BotonFecha";


export default function BoxDemanda(props) {
    const id = props.infoDemanda.id;
    const url = "/J/demandas/" + id;
    
    const { infoDemanda, onSetDate } = props;

    const handleDateSelection = (date) => {
        onSetDate(infoDemanda.id, date);
    };

    return (
        <div className="Box" id="DemandaJuez">
            <div className="BTexto">
                <div className="InfoDemanda">
                    <InfoDemanda infoDemanda={infoDemanda} />   
                </div>
            </div>                
            <div className="BBoton">
                { infoDemanda.estadoDemandaId === 1 ?
                    <BotonFecha onDateSelect={handleDateSelection}/>
                    :
                    <></>
                }
                <BotonURL url={url} texto={"Ver Detalle"}/>
            </div>
        </div>
    );
}
