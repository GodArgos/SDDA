import { useEffect, useState } from "react";
import BotonAccion from "../../../components/BotonAccion";
import BotonFecha from "../../../components/BotonFecha";

export default function AccionesDemanda(props){
    const { infoDemanda, onSetDate } = props;
    const {downloadForm, rejectForm} = {id: infoDemanda.id};
    const [rechazado, setRechazado] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [declineMessage, setDeclineMessage] = useState('');

    const handleDateSelection = (date) => {
        onSetDate(infoDemanda.id, date);
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

    const handleReject = () => {
        setShowPopup(true);
    };

    const handleSendDeclineMessage = async () => {
        try {
            const requestData = {
                id: infoDemanda.id,
                type: 'demand', 
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
            setRechazado(true); // Establece el estado como rechazado
        } catch (error) {
            alert('Error al enviar el mensaje: ' + error.message);
        }
    };

    useEffect(()=>{
        if(infoDemanda.estadoDemandaId === 4){
            setRechazado(true);
        }
    },[])

    return (
        <div className="BotonesDemanda" id={rechazado? "Rejected":""}>
            <BotonAccion func={handleDownload} texto="Descargar Formulario"/>
            {!rechazado &&
                <BotonFecha onDateSelect={handleDateSelection} texto={infoDemanda.estadoDemandaId === 1 ? "Programar Audiencia": "Reprogramar Audiencia"}/>
            }
            {!rechazado &&
                <BotonAccion func={handleReject} texto="Rechazar Demanda" estilo={"BAntiAccion"}/>
            }

            {showPopup && (
                <div className="popup">
                    <div className="Box" id="BRechazo">
                        <textarea
                            value={declineMessage}
                            onChange={(e) => setDeclineMessage(e.target.value)}
                            placeholder="Escribe tu mensaje aquí"
                        />
                        <div id="BBRechazo">
                            <button onClick={handleSendDeclineMessage}>Enviar</button>
                            <button onClick={() => setShowPopup(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}