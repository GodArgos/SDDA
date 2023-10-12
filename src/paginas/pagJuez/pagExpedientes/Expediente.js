import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BotonBuscar from "../../../components/BotonBuscar";
import "./Expediente.css";

export default function Expediente() {
    const navigate = useNavigate();
    const [dni, setDni] = useState("");

    const onChangeHandler = (e) => {
        setDni(e.target.value);
        console.log(dni);
    };

    const handleOnClick = () => {
        navigate("/expedientes/"+dni);
        console.log("hola");
    };

    return (
        <div className="Contenido" id="exp">
            <h1>Expedientes</h1>
            <p>
                En esta pestaña se podrá buscar el expediente requerido a traves
                del DNI.
            </p>
            <div className="contExp">
                <label id="name">DNI</label>
                <input
                    type="number"
                    id="input"
                    min="8"
                    max="8"
                    onChange={onChangeHandler}
                />
                <BotonBuscar func={handleOnClick} />
            </div>
        </div>
    );
}
