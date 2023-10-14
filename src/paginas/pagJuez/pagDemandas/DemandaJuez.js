import BoxDemanda from "./BoxDemanda";
import BannerJuez from "../../../components/BannerJuez";

export default function DemandaJuez(props) {
    const func = props.func;

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>Demandas</h1>
                <p>
                    En esta pestaña encontrará todas las demandas que le han
                    sido asignadas.
                </p>
                <BoxDemanda />
            </div>
        </>
    );
}
