import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BannerJuez from "../../../components/BannerJuez";
import InfoDetalleExpediente from "./InfoDetalleExpediente";
import BoxInfReniec from "./infoReniec/BoxInfReniec";
import BoxInfSunarp from "./infoSunarp/BoxInfSunarp";
import BoxInfTrabajo from "./infoTrabajo/BoxInfTrabajo";

export default function DetalleExpediente(props) {
    const func = props.func;
    const { dni } = useParams();
    const req = {"dni": dni};

    const [info, setInfo] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/search-expedient", {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(req)
            });
            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }
            const data = await response.json();
            if(data !== null){
                setInfo(data);
                setIsLoaded(true);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>
                    Expediente <InfoDetalleExpediente dni={dni} />
                </h1>
                { info !== null ? 
                    <>
                        <p>
                            En esta pestaña encontrará toda la información referida al
                            expediente.
                        </p> 
                        {isLoaded && (
                            <>
                                <div className="InfReniec">
                                    <BoxInfReniec form={info.FormRENIEC}/>
                                </div>
                                <div className="InfSunarp">
                                    <BoxInfSunarp form={info.FormSUNARP}/>
                                </div>
                                <div className="InfTrabajo">
                                    <BoxInfTrabajo form={info.FormMINTRABAJO}/>
                                </div>
                            </>
                        )}
                    </>
                    :
                    <p>
                        No existe un expediente con dicho dni.
                    </p>
                }
            </div>
        </>
    );
}
