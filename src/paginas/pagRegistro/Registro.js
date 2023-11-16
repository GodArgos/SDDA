import React, { useState } from "react";
import Popup from "../../components/Popup";
import RegistroForm from "./RegistroForm"; 
import logo from "../../imagenes/logo.png";
import "./Registro.css";

export default function Registro() {
    
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const closePopup = () => {
        setRegistrationSuccess(false);
    };

    const closePasswordErrorPopup = () => {
        setPasswordError(false);
    };

    return (
        <div className="pantallalogin">
            <div className="divsuperior" id="DSRegistro">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="divinferior">
                <div className="contenidologin">
                    <h1 className="titulo">Registro de usuario</h1>

                    <RegistroForm 
                        onSuccessfulRegistration={() => setRegistrationSuccess(true)}
                        onPasswordError={() => setPasswordError(true)}
                    />

                </div>
            </div>
            {registrationSuccess && (
                <Popup
                    func={closePopup}
                    texto="Registro exitoso. ¡Bienvenido!"
                />
            )}
            {passwordError && (
                <Popup
                    func={closePasswordErrorPopup}
                    texto="Las contraseñas no coinciden. Por favor, inténtalo de nuevo."
                />
            )}
        </div>
    );
}
