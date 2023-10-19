import { useContext, useState } from "react";
import UserContext from "../../../UserContext";

import BannerPN from "../../../components/BannerPN";
import "./LlenarDemanda.css";
import Popup from "../../../components/Popup";

export default function LlenarDemanda(props) {
    const func = props.func;
    const { user } = useContext(UserContext);
    const id = user.id;
    const [isNotRobot, setIsNotRobot] = useState(false);
    const [robotError, setRobotError] = useState(false);

    const redirectToLink = () => {
        window.location.href =
            "https://drive.google.com/uc?export=download&id=1oaJt680jc0dfNM9hQ5UkmClf_oPGSP6l";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isNotRobot){
            const formData = new FormData();
            console.log("Se guardó el archivo");
            formData.append("file", e.target.fileInput.files[0]);
            formData.append("id", id )
            fetch("http://localhost:3001/upload", {
                method: "POST",
                body: formData,
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
                            Subir Formulario de demanda de alimentos rellenado:
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
                            <input type="file" name="fileInput" id="subirDemanda" />
                        </div>
                    </div>
                    <div className="RequisitosEnviar">
                        <div className="divCaptcha">
                            <div className="Captcha">
                                <input type="checkbox" id="robot" checked={isNotRobot} onChange={handleCheckboxChange} value="esrobot" />
                                No soy un robot.
                            </div>
                        </div>
                        <input type="submit" className="BotonEnviarF" value="Enviar Formulario"/>
                    </div>
                </form>
            </div>
            {robotError && (
                <Popup
                    func={closeRobotErrorPopup}
                    texto="Verifique que no es un robot."
                />
            )}
        </>
    );
}
