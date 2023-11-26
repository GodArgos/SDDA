import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../../UserContext";

import BoxDemanda from "./BoxDemanda";
import BannerJuez from "../../../components/BannerJuez";

export default function DemandaJuez(props) {
    const { user } = useContext(UserContext);
    const func = props.func;
    const req = {"juezId": user.id};
    const [demandas, setDemandas] = useState([]);
    const [isDemandasLoaded, setIsDemandasLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-all-demands", {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(req)
            });
            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }
            const data = await response.json();
            setDemandas(data);
            setIsDemandasLoaded(true);
            //console.log("Demandas cargadas:", data); // Mostrar datos al cargar
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSetDate = async (demandId, date) => {
        try {
            const response = await fetch('http://localhost:3001/set-demand-date', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: demandId, date: date }),
            });

            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }

            const data = await response.json();
            //console.log('Fecha establecida con éxito:', data);
            fetchData(); // Vuelve a cargar los datos
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <>
            <BannerJuez func={func}/>
            <div className="Contenido">
                <h1>Demandas</h1>
                <p>
                    En esta pestaña encontrará todas las demandas que le han
                    sido asignadas.
                </p>
                {isDemandasLoaded ? (
                    demandas.length > 0 ? (
                        demandas.map((demanda, index) => (
                            <BoxDemanda key={index} infoDemanda={demanda} onSetDate={handleSetDate} />
                        ))
                    ) : (
                        <p>No hay demandas disponibles.</p>
                    )
                ) : (
                    <p>Cargando demandas...</p>
                )}
            </div>
        </>
    );
}
