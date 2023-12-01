import { useEffect, useState } from "react";
import BotonAccion from "../../../components/BotonAccion";

export default function AccionesDemandaFin(props){
    const { infoDemanda, onSetDate } = props;
    const {downloadForm, rejectForm} = {id: infoDemanda.id};

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

    return (
        <div className="BotonesDemanda" id={"Rejected"}>
            <BotonAccion func={handleDownload} texto="Descargar Formulario"/>
        </div>
    );
}