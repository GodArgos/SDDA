import React, { useState } from "react";
import "./Registro.css";
import BotonVolver from "../../components/BotonVolver";
import BotonRegistrar from "../../components/BotonRegistrar";
import logo from "../../imagenes/logo.png";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    email: "",
    docType: "DNI",
    docNumber: "",
    name: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
};

export default function Registro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const volverLogin = () => {
        navigate("/");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            // Display an error pop-up if passwords do not match
            setPasswordError(true);
        } else {
            // Simulate saving the data (you should send it to the server in a real app)
            // For demonstration, we'll just log the data.
            console.log("Registration Data:", formData);

            // Display the registration success pop-up
            setRegistrationSuccess(true);

            // Reset the form fields to their initial state
            setFormData(initialFormData);
        }
    };

    const closePopup = () => {
        setRegistrationSuccess(false);
    };

    const closePasswordErrorPopup = () => {
        setPasswordError(false);
    };

    return (
        <div className="pantallalogin">
            <div className="divsuperior">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="divinferior">
                <div className="contenidologin">
                    <h1 className="titulo">Registro de usuario</h1>

                    <form onSubmit={handleFormSubmit}>
                        <div className="Elemento">
                            <label>Correo electrónico:</label>
                            <input
                                className="caja"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="Elemento">
                            <label>Documento:</label>
                            <div className="documento-container">
                                <select
                                    className="caja-documento"
                                    value={formData.docType}
                                    onChange={(e) => setFormData({ ...formData, docType: e.target.value })}
                                >
                                    <option value="DNI">DNI</option>
                                    <option value="CE">Carne de extranjería</option>
                                </select>
                                <input
                                    className="caja caja-segunda"
                                    type="number"
                                    name="docNumber"
                                    value={formData.docNumber}
                                    onChange={(e) => setFormData({ ...formData, docNumber: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="Elemento">
                            <label>Nombre completo:</label>
                            <input
                                className="caja"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="Elemento">
                            <label>Número de celular:</label>
                            <input
                                className="caja"
                                type="number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </div>
                        <div className="Elemento">
                            <label>Contraseña:</label>
                            <input
                                className="caja"
                                type="password"
                                name="password"
                                minLength={8}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <div className="Elemento">
                            <label>Confirmar contraseña:</label>
                            <input
                                className="caja"
                                type="password"
                                name="confirmPassword"
                                minLength={8}
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            />
                        </div>
                        <div className="botones">
                            <BotonVolver onClick={volverLogin} />
                            <button type="submit" className="BotonRegistrar">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
            {registrationSuccess && (
                <div className="popup">
                    <div className="popup-content">
                        <span onClick={closePopup} className="close-popup">
                            &times;
                        </span>
                        <p>Registro exitoso. ¡Bienvenido!</p>
                    </div>
                </div>
            )}
            {passwordError && (
                <div className="popup">
                    <div className="popup-content">
                        <span onClick={closePasswordErrorPopup} className="close-popup">
                            &times;
                        </span>
                        <p>Las contraseñas no coinciden. Por favor, inténtalo de nuevo.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
