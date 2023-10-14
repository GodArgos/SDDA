import BannerJuez from "../../../components/BannerJuez";
import InfoCrearDemanda from "./InfoCrearDemanda";

export default function CrearDemanda(props) {
    const func = props.func;
    const  id  = 1;
    return (
        <>
            <BannerJuez func={func}/>
            <div className="Contenido">
                <h1>Crear Demanda <InfoCrearDemanda solicitud={id} /> </h1>
                <p>
                    En esta pestaña se podrá crear la demanda.
                </p>
            </div>
        </>
    );
}
