import { useState } from "react";
import { useParams } from "react-router-dom";

import BannerJuez from "../../../components/BannerJuez";
import InfoDetalleExpediente from "./InfoDetalleExpediente";
import BoxInfReniec from "./infoReniec/BoxInfReniec";
import BoxInfSunarp from "./infoSunarp/BoxInfSunarp";
import BoxInfTrabajo from "./infoTrabajo/BoxInfTrabajo";
import { useEffect } from "react";
/* import BoxInfSecretario from "./infoSecretario/BoxInfSecretario"; */

export default function DetalleExpediente(props) {
    const func = props.func;
    const { dni } = useParams();
    const req = {"dni": dni};

    const [info, setInfo] = useState({
    });
    const [reniecLoaded, setReniecLoaded] = useState(false);
    const [sunarpLoaded, setSunarpLoaded] = useState(false);
    const [minTrabajoLoaded, setMinTrabajoLoaded] = useState(false);
    const [existeExp, setExisteExp] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3001/search-expedient", {
            method: 'POST', 
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(req)
        })
            .then(response=> response.json())
            .then(procesarDato)
            .then(handleError)
            .then(loadInfo)
    }, []);

    function loadInfo(){
        sleep(1000)
        setReniecLoaded(true);
        setSunarpLoaded(true);
        setMinTrabajoLoaded(true); 
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function procesarDato(data){
        setInfo(data);
    }

    function handleError(error){
        if(error != null){
            console.log("Ocurrio un error:" + error);
        }
    }

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>
                    Expediente <InfoDetalleExpediente dni={dni} />
                </h1>
                { existeExp? 
                    <p>
                        En esta pestaña encontrará toda la información referida al
                        expediente.
                    </p> :
                    <p>
                        No existe un expediente con dicho dni.
                    </p>
                }

                {reniecLoaded && (
                    <div className="InfReniec">
                        <BoxInfReniec form={info.FormRENIEC}/>
                    </div>
                )}

                {sunarpLoaded && (
                    <div className="InfSunarp">
                        <BoxInfSunarp form={info.FormSUNARP}/>
                    </div>
                )}

                {minTrabajoLoaded && (
                    <div className="InfTrabajo">
                        <BoxInfTrabajo form={info.FormMINTRABAJO}/>
                    </div>
                )}

                {/* <div className="InfSecretario">
                    <BoxInfSecretario />
                </div> */}
            </div>
        </>
    );
}
