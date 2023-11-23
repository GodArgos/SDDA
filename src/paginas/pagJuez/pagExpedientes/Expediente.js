import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BannerJuez from "../../../components/BannerJuez";
import Popup from "../../../components/Popup";
import "./Expediente.css";

export default function Expediente(props) {
    const navigate = useNavigate();
    const [dni, setDni] = useState("");
    const [dniError, setDniError] = useState(false);

    const onChangeHandler = (e) => {
        setDni(e.target.value);
    };

    const handleOnClick = () => {
        if (dni.length !== 8 && dni.length !== 0) {
            setDniError(true);
        } else {
            navigate("/J/expedientes/" + dni);
        }
    };

    const closeDNIErrorPopup = () => {
        setDniError(false);
    }

    const func = props.func;

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>Expedientes</h1>
                <p>
                    En esta pestaña se podrá buscar el expediente requerido a
                    traves del DNI.
                </p>
                <form onSubmit={handleOnClick} className="contExp">
                    <label id="name">DNI</label>
                    <input
                        type="number"
                        id="input"
                        minLength="8"
                        maxLength="8"
                        onChange={onChangeHandler}
                    />
                    <button type="submit" className="BotonBuscar">Buscar</button>
                </form>
            </div>
            {dniError && (
                <Popup
                    func={closeDNIErrorPopup}
                    texto="Coloque un DNI válido"
                />
            )}
        </>
    );
}
