import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BannerJuez from "../../../components/BannerJuez";
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

    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        genero: '',
        dni: ''
    });

    const updateFormData = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleAccept = async () => {
        try {
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
        } catch (error) {
            alert('Error al enviar la solicitud: ' + error.message);
        }
    };

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
            <BannerJuez func={func}/>
            <div className="Contenido">
                <h1>Crear Demanda <InfoCrearDemanda solicitud={id} /> </h1>
                <p>
                    En esta pestaña se podrá crear la demanda.
                </p>
                {isSolicitudLoaded && (
                    <div className="grid-container">
                        <BoxDemandante solicitud={solicitud}/>
                        <BoxDemandado updateFormData={updateFormData} />
                    </div>
                )}
                <div>
                    <button className="download-button">Descargar PDF</button>
                    <button className="reject-button">Rechazar</button>
                    <button className="accept-button" onClick={handleAccept}>Aceptar</button>
                </div>
            </div>
        </>
    );
}
