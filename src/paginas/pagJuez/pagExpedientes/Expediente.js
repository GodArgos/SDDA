import { useState } from "react";
import BotonBuscar from "../../../components/BotonBuscar";
import "./Expediente.css";

export default function Expediente() {

    const[dni, setDni] = useState("");

    const onChangeHandler = e => {
        setDni(e.target.value);
    }

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
                        <input type="number" id="input" min="8" max="8" onChange={onChangeHandler}/>
                    </div>

                    <div id="boton">
                        <br />
                        <BotonBuscar dni={dni}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
