import { useContext, useState } from "react";
import UserContext from "../../../UserContext";

import BannerPN from "../../../components/BannerPN";
import "./LlenarDemanda.css";
import Popup from "../../../components/Popup";
import { useNavigate } from "react-router-dom";

export default function LlenarDemanda(props) {
    const func = props.func;
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const id = user.id;
    const [isNotRobot, setIsNotRobot] = useState(false);
    const [robotError, setRobotError] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [envioExitoso, setEnvioExitoso] = useState(null);

    const redirectToLink = () => {
        window.location.href = 
            "https://drive.google.com/uc?export=download&id=1p-ns5u1cGP1qeZ-L6qnYprkISpz1yD-M";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isNotRobot){
            const formData = new FormData();
            formData.append("file", e.target.fileInput.files[0]);
            formData.append("id", id )
            fetch("http://localhost:3001/upload", {
                    method: "POST",
                    body: formData,
                })
                .then((response) =>{
                    if(response.status !== 200){
                        throw new Error("Error en la solicitud");
                    }
                })
                .then((data)=>{
                    setEnvioExitoso(true);
                })
                .then(setEnviado(true))
                .catch((error)=>{
                    setEnvioExitoso(false);
                })
        } else {
            setRobotError(true);
        }
    };

    function handleCheckboxChange(){
        setIsNotRobot(true)
    }

    const closeRobotErrorPopup = () => {
        setRobotError(false);
    }

    return (
        <>
            <BannerPN func={func} />
            {!enviado && (
                <div className="Contenido">
                    <h1>Llenar Demanda</h1>
                    <div className="Seccion">
                        En esta pestaña podrás descargar el archivo PDF del
                        formulario para realizar una demanda de alimentos.
                    </div>
                    <div className="Box" id="LD-PDF">
                        <div className="InfoLD">
                            Formulario de demanda de alimentos:
                            <p>
                                Al descargar el archivo PDF, tendrás que llenar el
                                archivo con la información necesaria para poder
                                iniciar el proceso judicial.
                            </p>
                        </div>
                        <div className="BotonLD">
                            <button className="BotonD" onClick={redirectToLink}>
                                Descargar
                            </button>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="Box" id="LD-PDF">
                            <div className="InfoLD">
                                Subir el Formulario de Demanda de Alimentos rellenado:
                                <p>
                                    Aquí se sube el archivo con los datos rellenados,
                                    para ser enviados y comenzar con el proceso
                                    judicial.
                                </p>
                            </div>
                            <div className="BotonLD">
                                <label
                                    htmlFor="subirDemanda"
                                    className="custom-subirDemanda"
                                >
                                    Subir Archivo
                                </label>
                                <input type="file" name="fileInput" id="subirDemanda" accept=".pdf" required formNoValidate/>
                            </div>
                        </div>
                        <div className="RequisitosEnviar">
                            <div className="divCaptcha">
                                <div className="Captcha">
                                    <input type="checkbox" id="robot" checked={isNotRobot} onChange={handleCheckboxChange} value="esrobot" />
                                    No soy un robot
                                </div>
                            </div>
                            <input type="submit" className="BotonEnviarF" value="Enviar Formulario"/>
                        </div>
                    </form>
                </div>
            )}
            {robotError && (
                <Popup
                    func={closeRobotErrorPopup}
                    texto="Verifique que no es un robot."
                />
            )}
            {enviado && envioExitoso && (
                <div className="Contenido">
                    <h1>Llenar Demanda</h1>
                    <br/>
                    <div className="Box" >
                        <p>Tu solicitud de demanda ha sido enviada con éxito.</p>
                    </div>
                </div>
            )}
            {enviado && !envioExitoso && (
                <div className="Contenido">
                    <h1>Llenar Demanda</h1>
                    <br/>
                    <div className="Box" >
                        <p>Ocurrió un error al enviar tu demanda, por favor intentelo de nuevo.</p>
                    </div>
                </div>
            )}
        </>
    );
}