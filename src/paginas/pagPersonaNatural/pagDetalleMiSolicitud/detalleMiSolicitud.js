import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../../UserContext";

import BannerPN from "../../../components/BannerPN";
import InfoMDPersona from "../pagDetalleMiDemanda/infoMDPersona";
import BotonAccion from "../../../components/BotonAccion";

export default function DetalleMiSolicitud(props){
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
            const response = await fetch("http://localhost:3001/get-dem-req", {
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

    const handleDownload = async () => {
        try {
            //console.log(downloadForm);
            const response = await fetch("http://localhost:3001/download-pdf", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(req)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }

            const data = await response.json();
            if (data.link) {
                window.open(data.link, '_blank'); // abre el link en una nueva pestaña
            } else {
                console.error("No se recibió un enlace válido");
            }
        } catch (error) {
            alert('Error al enviar la solicitud: ' + error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function errorDetalleSolicitud(){
        if(info.PersonaNatural.id === -1){
            return(
                <p>
                    No existe una solicitud de demanda asociada al id de número de solicitud: {id}
                </p> 
            )
        } else if (info.PersonaNatural.id !== user.id){
            return(
                <p>
                    La solicitud demanda con el número de solicitud {id} no está asociada al usuario actualmente en sesión.
                </p> 
            )
        }
    }

    return(
        <>
            <BannerPN func={func} />
            <div className="Contenido">
                <h1>
                    Solicitud Nro {id}
                </h1>
                {info.PersonaNatural.id === user.id ? 
                    <>
                        <p>
                            En esta pestaña encontrará toda la información referida a la
                            solicitud de demanda número {id}
                        </p>
                        { isLoaded && (
                            <>
                                <div className="Box">
                                    <div className="BTexto" id="BInfoDemanda">
                                        <p><b>Fecha de emisión:</b> {info.fecha_emision}</p>
                                        <p><b>Estado de Revisión:</b>
                                            {info.comentario === null ?
                                                " Por revisar" : " Rechazada"
                                            }
                                        </p>
                                        {info.comentario ?
                                            <p><b>Comentario de Rechazo:</b> {info.comentario}</p>: <></>
                                        }
                                    </div>
                                </div>
                                <div className="BotonesDemanda" id="Rejected">
                                    <BotonAccion func={handleDownload} texto="Descargar Formulario Enviado"/>
                                </div>
                                <br/>
                                <InfoMDPersona infoPersona={info.PersonaNatural} rol="demandante"/>
                            </>
                        )}
                    </>
                    :
                    errorDetalleSolicitud()
                }
            </div>
        </>
    );
}