import { useContext, useEffect, useState } from "react";
import UserContext from "../../../UserContext";

import BannerPN from "../../../components/BannerPN";
import DemandaPN from "./demandaPN";


export default function MisDemandas(props) {
    const { user } = useContext(UserContext);
    const func = props.func;
    const [demandas, setDemandas] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:3001/my-demands", {
            method: 'POST', 
            headers: {"Content-type": "application/json",},
            body: JSON.stringify(user)
        })
            .then(response=> response.json())
            .then(procesarDato)
            .then(handleError)
    }, []);

    function procesarDato(data){
        setDemandas(data);
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
                <h1>Mis Demanda</h1>
                <div className="Seccion">
                    En esta página podrás ver el estado de tus demandas enviadas.
                </div>
                <br/>
                {demandas.map((demanda, index) => (
                    <DemandaPN key={index} infoDemanda={demanda} />
                ))}
            </div>
        </>
    );
}