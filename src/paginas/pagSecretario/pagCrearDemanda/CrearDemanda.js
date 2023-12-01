import { useEffect, useState, useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../../UserContext";

import BannerSec from "../../../components/BannerSec";
import InfoCrearDemanda from "./InfoCrearDemanda";
import BoxDemandante from "./BoxDemandante";
import BoxDemandado from "./BoxDemandado";
import "./CrearDemanda.css";

export default function CrearDemanda(props) {
    const func = props.func;
    const { id } = useParams();
    const req = {"id": id};
    const [solicitud, setSolicitud] = useState([]);
    const [isSolicitudLoaded, setIsSolicitudLoaded] = useState(false);
    const Navigate = useNavigate();
    const { user } = useContext(UserContext);
    const backSolicitud = () => { 
        Navigate("/S/solicitudes");
    }


    const [formData, setFormData] = useState({
        def_names: '',
        def_lastnames: '',
        def_sexId: -1,
        def_dni: '',
        def_address: ' ',
        dem_descrip: ' ',
        juez_id: user.id
        // persona_id y form_id se establecerán después
    });

    const [deleteForm, setDeleteForm] = useState({

    });

    const [downloadForm, setDownloadForm] = useState({

    });

    useEffect(() => {
        if (isSolicitudLoaded) {
            setDownloadForm(prevData => ({
                ...prevData,
                id: solicitud.id
            }))
            setFormData(prevData => ({
                ...prevData,
                persona_id: solicitud.personaNaturalId,
                form_id: solicitud.id
            }));
            setDeleteForm(prevData => ({
                ...prevData,
                id: solicitud.id
            }))
        }
    }, [isSolicitudLoaded, solicitud]);

    const updateFormData = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const [showPopup, setShowPopup] = useState(false);
    const [declineMessage, setDeclineMessage] = useState('');

    const handleSendDeclineMessage = async () => {
        try {
            
            const requestData = {
                id: deleteForm.id,
                type: 'form', //form o demand
                state: 4, // Estado de 'rechazado'
                comment: declineMessage
            };

            console.log(requestData)

            const response = await fetch("http://localhost:3001/set-state", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }

            const data = await response.json();
            alert(data.message);
            setShowPopup(false); 
            Navigate("/S/solicitudes");
        } catch (error) {
            alert('Error al enviar el mensaje: ' + error.message);
        }
    };

    const handleDecline1 = () => {
        setShowPopup(true);
    };

    const handleDownload = async () => {
        try {
            //console.log(downloadForm);
            const response = await fetch("http://localhost:3001/download-pdf", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(downloadForm)
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

    const handleAccept = async () => {
        try {

            //console.log(formData)
            const response = await fetch("http://localhost:3001/create-demanda", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(formData)
                
            });
    
            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }
    
            const data = await response.json();
            alert(data.message);
            
            Navigate("/S/solicitudes");
        } catch (error) {
            alert('Error al enviar la solicitud: ' + error.message);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/get-dem-req", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(req)
            });
            if (!response.ok) {
                throw new Error('La solicitud no se completó con éxito.');
            }
            const data = await response.json();
            setSolicitud(data);
            setIsSolicitudLoaded(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <BannerSec func={func} />
            <div className="Contenido">
                <h1>Crear Demanda <InfoCrearDemanda solicitud={id} /></h1>
                <p>
                    En esta pestaña se podrá crear la demanda.
                </p>
                {isSolicitudLoaded && (
                    <div className="grid-container">
                        <BoxDemandante solicitud={solicitud} />
                        <BoxDemandado updateFormData={updateFormData} />
                    </div>
                )}
                <div>
                    <button className="download-button" onClick={handleDownload}>Descargar PDF</button>
                    <button className="accept-button" onClick={handleAccept}>Aceptar</button>
                    <button className="reject-button" onClick={handleDecline1}>Rechazar</button>
                    
                </div>
                {showPopup && (
                    <div className="popup">
                        <textarea
                            value={declineMessage}
                            onChange={(e) => setDeclineMessage(e.target.value)}
                            placeholder="Escribe tu mensaje aquí"
                        />
                        <button onClick={handleSendDeclineMessage}>Enviar</button>
                        <button onClick={() => setShowPopup(false)}>Cancelar</button>
                    </div>
                )}
            </div>
        </>
    );
}