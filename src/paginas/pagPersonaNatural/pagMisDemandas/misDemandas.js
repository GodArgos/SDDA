import { useContext, useEffect, useState } from "react";
import UserContext from "../../../UserContext";

import BannerPN from "../../../components/BannerPN";
import DemandaPN from "./demandaPN";
import SolicitudPN from "./solicitudPN";


export default function MisDemandas(props) {
    const { user } = useContext(UserContext);
    const func = props.func;
    const [demandas, setDemandas] = useState([]);
    const [solicitudes, setSolicitudes] = useState([]);
    const inicial = [];
    
    useEffect(() => {
        fetch("http://localhost:3001/my-demands", {
            method: 'POST', 
            headers: {"Content-type": "application/json",},
            body: JSON.stringify(user)
        })
            .then(response=> response.json())
            .then(procesarDato)
            .then(handleError)
        
        fetch("http://localhost:3001/my-dem-req", {
                method: 'POST', 
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(user)
            })
                .then(response=> response.json())
                .then(procesarDatoSolicitud)
                .then(handleError)
    }, []);

    function procesarDato(data){
        setDemandas(data);
    }

    function procesarDatoSolicitud(data){
        setSolicitudes(data);
    }

    function handleError(error){
        if(error != null){
            console.log("Ocurrio un error:" + error);
        }
    }

    return(
        <>
            <BannerPN func={func} />
            <div className="Contenido">
                <h1>Mis Demandas</h1>
                <div className="Seccion">
                    En esta página podrás ver el estado de tus demandas enviadas.
                </div>
                <br/>
                {demandas !== inicial ? 
                    <>
                        {demandas.map((demanda, index) => (
                            <DemandaPN key={index} infoDemanda={demanda} />
                        ))}
                    </>
                    :
                    <>
                        <p>No hay demandas para mostrar</p>
                    </>
                }
                {solicitudes !== inicial ? 
                    <>
                        {solicitudes.map((solicitud, index) => (
                            <SolicitudPN key={index} infoDemanda={solicitud}/>
                        ))}
                    </>
                    :
                    <>
                        <p>No hay demandas para mostrar</p>
                    </>
                }
            </div>
        </>
    );
}