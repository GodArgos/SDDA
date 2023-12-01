import React, { useContext, useEffect, useState } from 'react';
import UserContext from "../../../UserContext";

import BoxDemanda from "./BoxDemanda";
import BannerJuez from "../../../components/BannerJuez";
import FiltroDemanda from './FiltroDemanda';

export default function DemandaJuez(props) {
    const { user } = useContext(UserContext);
    const func = props.func;
    const req = {"juezId": user.id};
    const [demandas, setDemandas] = useState([]);
    const [isDemandasLoaded, setIsDemandasLoaded] = useState(false);
    const [filtro, setFiltro] = useState([]);

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

    const fetchDataFilter = async() => {

        const reqfiltre = {"state": filtro, "judgeId": user.id}

        try {
            const response = await fetch("http://localhost:3001/get-all-demands-filter", {
                method: 'POST', 
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(reqfiltre)
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

    const handleFiltroChange = (newFiltro) => {
        setFiltro(newFiltro);

    };

    useEffect(() => {
        
        if (filtro == 0){
            fetchData();
        }
        else {
            fetchDataFilter();
        }
        console.log(filtro)
    }, [filtro]);



    return (
        <>
            <BannerJuez func={func}/>
            <div className="Contenido">
                <h1>Demandas</h1>
                <p>
                    En esta pestaña encontrará todas las demandas que le han
                    sido asignadas.
                </p>

                <FiltroDemanda onFiltroChange={handleFiltroChange}/>


                {isDemandasLoaded ? (
                    demandas.length > 0 ? (
                        demandas.map((demanda, index) => (
                            <BoxDemanda key={index} infoDemanda={demanda} />
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
