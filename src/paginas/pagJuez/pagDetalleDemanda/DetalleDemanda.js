import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../UserContext";

import BannerJuez from "../../../components/BannerJuez";
import InfoDGeneral from "./infoDGeneral";
import InfoDPersona from "./infoDPersona";
import AccionesDemanda from "./AccionesDemanda";
import BotonAccion from "../../../components/BotonAccion";
import AccionesDemandaFin from "./AccionesDemandaFin";

export default function DetalleDemanda(props) {
    const { user } = useContext(UserContext);
    const func = props.func;
    const { id } = useParams();
    const req = {"id": id};

    const [info, setInfo] = useState({
        Juez: {
            id: -1
        }
    });
    const [isLoaded, setIsLoaded] = useState(false);
    const [seguro, setSeguro] = useState(false);
    const [enProceso, setEnProceso] = useState(false);
    const [finalizada, setFinalizada] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-demand", {
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
            if(data.estadoDemandaId === 2){
                setEnProceso(true);
            } else if(data.estadoDemandaId === 3){
                setFinalizada(true);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function errorDetalleDemanda(){
        if(info.Juez.id === -1){
            return(
                <p>
                    No existe una demanda asociada al id de número de demanda: {id}
                </p> 
            )
        } else if (info.Juez.id !== user.id){
            return(
                <p>
                    La demanda con el número de demanda {id} no está asociada al usuario actualmente en sesión.
                </p> 
            )
        }
    }

    function handleFinalizar(){
        try {
            const reqFinalizar = {"id": id, "type": "demand","state": 3}
            fetch('http://localhost:3001/set-state', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                    body: JSON.stringify(reqFinalizar),
                });
            setEnProceso(false);
            setFinalizada(true);
            fetchData(); // Vuelve a cargar los datos
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    }

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

            //const data = await response.json();
            //console.log('Fecha establecida con éxito:', data);
            fetchData(); // Vuelve a cargar los datos
        } catch (error) {
            console.error('Error al enviar datos:', error);
        }
    };

    function handleSeguro(){
        setSeguro(!seguro);
    }

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>
                    Demanda Nro {id}
                </h1>

                { info.Juez.id === user.id ? 
                    <>
                        <p>
                            En esta pestaña encontrará toda la información referida a la
                            demanda número {id}
                        </p>
                        {isLoaded && (
                            <>
                                <InfoDGeneral infoDemanda={info}/>
                                {!finalizada ?
                                    <AccionesDemanda infoDemanda={info} onSetDate={handleSetDate}/>
                                    :
                                    <AccionesDemandaFin infoDemanda={info} />
                                }
                                <br/>
                                <InfoDPersona infoPersona={info.PersonaNatural} rol="demandante"/>
                                <InfoDPersona infoPersona={info.Demandado} rol="demandado"/>
                                {enProceso && (
                                    <div className="FinalizarDemanda">
                                        {!seguro ?
                                            <BotonAccion func={handleSeguro} texto="Finalizar Proceso de Demanda"/>
                                            :
                                            <>
                                                <p><b>La Demanda finalizó satisfactoriamente?</b></p>
                                                <div className="BotonesDemanda">
                                                    <BotonAccion func={handleFinalizar} texto="Finalizar Proceso de Demanda" />
                                                    <BotonAccion estilo={"BAntiAccion"} func={handleSeguro} texto="Volver"/>
                                                </div>
                                            </>
                                        }
                                    </div>
                                )}
                            </>
                        )}
                    </>
                    :
                    errorDetalleDemanda()
                }
            </div>
        </>
    );
}
