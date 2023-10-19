import { useEffect, useState } from "react";

import BoxSolicitud from "./BoxSolicitud";
import BannerJuez from "../../../components/BannerJuez";

export default function SolicitudDemanda(props) {
    const func = props.func;
    const [solicitudes, setSolicitudes] = useState([]);
    const [isSolicitudesLoaded, setIsSolicitudesLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-all-dem-req", {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
            });
            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }
            const data = await response.json();
            setSolicitudes(data);
            setIsSolicitudesLoaded(true);
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
                <h1>Solicitudes</h1>
                <p>
                    En esta pestaña encontrará todas las solicitudes de demandas
                    que le han sido asignadas.
                </p>
                {isSolicitudesLoaded && (
                    solicitudes.length > 0 ? (
                        solicitudes.map((solicitud, index) => (
                            <BoxSolicitud key={index} infoSolicitud={solicitud}/>
                        ))
                    ) : (
                        <p>No hay demandas disponibles.</p>
                    ))
                }
            </div>
        </>
    );
}
