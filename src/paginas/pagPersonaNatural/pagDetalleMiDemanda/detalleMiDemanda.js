import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../UserContext";

import BannerPN from "../../../components/BannerPN";
import InfoMDGeneral from "./infoMDGeneral";
import InfoMDPersona from "./infoMDPersona";

export default function DetalleMiDemanda(props) {
    const { user } = useContext(UserContext);
    const func = props.func;
    const { id } = useParams();
    const req = {"id": id};

    const [info, setInfo] = useState({
        PersonaNatural: {
            id: -1
        }
    });
    const [isLoaded, setIsLoaded] = useState(false);

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
                console.log(data)
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

    function errorDetalleDemanda(){
        if(info.PersonaNatural.id === -1){
            return(
                <p>
                    No existe una demanda asociada al id de número de demanda: {id}
                </p> 
            )
        } else if (info.PersonaNatural.id !== user.id){
            return(
                <p>
                    La demanda con el número de demanda {id} no está asociada al usuario actualmente en sesión.
                </p> 
            )
        }

    }

    return (
        <>
            <BannerPN func={func} />
            <div className="Contenido">
                <h1>
                    Demanda Nro {id}
                </h1>

                {info.PersonaNatural.id === user.id ? 
                    <>
                        <p>
                            En esta pestaña encontrará toda la información referida a la
                            demanda Nro {id}
                        </p>
                        { isLoaded && (
                            <>
                                <InfoMDGeneral infoDemanda={info}/>
                                <InfoMDPersona infoPersona={info.PersonaNatural} rol="demandante"/>
                                <InfoMDPersona infoPersona={info.Demandado} rol="demandado"/>
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
