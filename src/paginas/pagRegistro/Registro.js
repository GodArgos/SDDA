import React from "react";
import "./Registro.css";
import BotonVolver from "../../components/BotonVolver";
import BotonRegistrar from "../../components/BotonRegistrar";
import logo from "../../imagenes/logo.png";
import { useNavigate } from "react-router-dom";

export default function Registro() {
    const navigate = useNavigate();
    const volverLogin = () => {
        navigate("/");
    }
    return (
        <div className="pantallalogin">
            <div className="divsuperior">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="divinferior">
                <div className="contenidologin">
                    <h1 className="titulo">Registro de usuario</h1>

                    <div className="Elemento">
                        <label>Correo electrónico:</label>
                        <input
                            className="caja"
                            type="text"
                            name="User"
                            id="User"
                        />
                    </div>
                    <div className="Elemento">
                        <label>Documento:</label>
                        <div className="documento-container">
                            <select className="caja-documento">
                                <option value="DNI">DNI</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Otro">Otro</option>
                            </select>
                            <input
                                className="caja caja-segunda"
                                type="number"
                                name="doc"
                                id="doc"
                            />
                        </div>
                    </div>
                    <div className="Elemento">
                        <label>Nombre completo:</label>
                        <input
                            className="caja"
                            type="text"
                            name="passw"
                            id="passw"
                        />
                    </div>
                    <div className="Elemento">
                        <label>Número de celular:</label>
                        <input
                            className="caja"
                            type="number"
                            name="celu"
                            id="celu"
                        />
                    </div>
                    <div className="Elemento">
                        <label>Contraseña:</label>
                        <input
                            className="caja"
                            type="text"
                            name="pass"
                            id="pass"
                        />
                    </div>
                    <div className="Elemento">
                        <label>Confirmar contraseña:</label>
                        <input
                            className="caja"
                            type="text"
                            name="pass"
                            id="pass"
                        />
                    </div>
                    <div className="botones">
                        <BotonVolver
                            onClick={volverLogin}
                        />
                        <BotonRegistrar
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
