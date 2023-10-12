import BotonBuscar from "../../../components/BotonBuscar";
import "./Expediente.css";

export default function Expediente() {
    return (
        <div className="Contenido" id="exp">
            <h1>Expedientes</h1>
            <p>
                En esta pestaña se podrá buscar el expediente requerido a traves
                del DNI.
            </p>
            <div className="contExp">
                <div>
                    <p id="name">DNI</p>
                    <div>
                        <input type="number" id="input" />
                    </div>

                    <div id="boton">
                        <br />
                        <BotonBuscar />
                    </div>
                </div>
            </div>
        </div>
    );
}
