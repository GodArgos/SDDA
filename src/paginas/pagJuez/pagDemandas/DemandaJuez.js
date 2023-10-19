import { useEffect, useState } from "react";

import BoxDemanda from "./BoxDemanda";
import BannerJuez from "../../../components/BannerJuez";

export default function DemandaJuez(props) {
    const func = props.func;
    const [demandas, setDemandas] = useState([]);
    const [isDemandasLoaded, setIsDemandasLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-all-demands", {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
            });
            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }
            const data = await response.json();
            setDemandas(data);
            setIsDemandasLoaded(true);
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
                <h1>Demandas</h1>
                <p>
                    En esta pestaña encontrará todas las demandas que le han
                    sido asignadas.
                </p>
                {isDemandasLoaded && (
                    demandas.length > 0 ? (
                        demandas.map((demandas, index) => (
                            <BoxDemanda key={index} infoDemanda={demandas}/>
                        ))
                    ) : (
                        <p>No hay demandas disponibles.</p>
                    ))
                }
            </div>
        </>
    );
}
