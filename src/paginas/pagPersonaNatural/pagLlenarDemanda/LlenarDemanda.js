import BannerPN from "../../../components/BannerPN";
import "./LlenarDemanda.css";

export default function LlenarDemanda(props) {
    const func = props.func;
    
    return (
        <>
            <BannerPN func={func}/>
            <div className="Contenido">
                <h1>Llenar Demanda</h1>
                <div className="Seccion">
                        En esta pestaña podrás descargar el archivo PDF del formulario para realizar una demanda de alimentos,
                        se tendrá que llenar con la información necesaria y enviada por esta página para poder iniciar el proceso
                        judicial. <b>*Descripción momentanea*</b>
                </div>
                <div className="DescargaPDF">
                    Formulario de demanda de alimentos: 
                    <button className="BotonLD">Descargar</button>
                </div>
                <div className="SubidaPDF">
                    Subir formulario de demanda de alimentos llenado:
                    <label for="subirDemanda" class="custom-subirDemanda">Subir Archivo</label>
                    <input id="subirDemanda" type="file"/>
                </div>
                <div className="divCaptcha">
                    <div className="Captcha">
                    <input type="checkbox" id="robot" value="esrobot" /> No soy un robot.
                    </div>
                </div>
                <input type="submit" className="BotonLD" id="enviar"/>
            </div>
        </>
    );
}
