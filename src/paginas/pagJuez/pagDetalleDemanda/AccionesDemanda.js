import { useState } from "react";
import BotonAccion from "../../../components/BotonAccion";
import BotonFecha from "../../../components/BotonFecha";

export default function AccionesDemanda(props){
    const { infoDemanda, onSetDate } = props;
    const {downloadForm, rejectForm} = {id: infoDemanda.id};
    const [rechazado, setRechazado] = useState(false);

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

    function handleReject(){
        console.log(rejectForm);
        setRechazado(true);
        /* try {
            //console.log(rejectForm);
            //endpoint para cambiar el estado de demanda a rechazado
            const response = await fetch("http://localhost:3001/delete-req", {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(rejectForm)
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(text);
            }
            //const data = await response.json();
            //alert(data.message);
            backSolicitud();
        } catch (error) {
            alert('Error al enviar la solicitud: ' + error.message);
        } */
    }

    return(
        <div className="BotonesDemanda" id={rechazado? "Rejected":""}>
            <BotonAccion func={handleDownload} texto="Descargar Formulario"/>
            {!rechazado ?
                <BotonFecha onDateSelect={handleDateSelection} texto={infoDemanda.estadoDemandaId === 1 ? "Programar Audiencia": "Reprogramar Audiencia"}/>
                :
                <></>
            }
            <BotonAccion func={handleReject} texto="Rechazar Demanda" estilo={"BAntiAccion"}/>
        </div>
    )
}