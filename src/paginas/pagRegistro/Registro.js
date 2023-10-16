import React, { useState } from "react";
import "./Registro.css";
import BotonVolver from "../../components/BotonVolver";
import BotonRegistrar from "../../components/BotonRegistrar";
import logo from "../../imagenes/logo.png";
import { useNavigate } from "react-router-dom";

const initialFormData = {
    email: "",
    docNumber: "",
    nombres: "",
    apellidos: "",
    nombre_usuario: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    sexo: 1, // Inicialmente, establece el valor predeterminado como masculino (1).
};

export default function Registro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const volverLogin = () => {
        navigate("/");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setPasswordError(true);
        } else {
            console.log("Registration Data:", formData);
            setRegistrationSuccess(true);
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
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Nro. DNI:</label>
                                <input
                                    className="caja caja-segunda"
                                    type="number"
                                    name="docNumber"
                                    value={formData.docNumber}
                                    onChange={(e) => setFormData({ ...formData, docNumber: e.target.value })}
                                    required
                                />
                        </div>
                        <div className="Elemento">
                            <label>Nombre:</label>
                            <input
                                className="caja"
                                type="text"
                                name="nombres"
                                value={formData.nombres}
                                onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Apellidos:</label>
                            <input
                                className="caja"
                                type="text"
                                name="apellidos"
                                value={formData.apellidos}
                                onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Sexo:</label>
                            <select
                                className="caja-documento"
                                value={formData.sexo}
                                onChange={(e) => setFormData({ ...formData, sexo: parseInt(e.target.value) })}
                            >
                                <option value={1}>Masculino</option>
                                <option value={2}>Femenino</option>
                                <option value={3}>Otro</option>
                            </select>
                        </div>
                        <div className="Elemento">
                            <label>Número de celular:</label>
                            <input
                                className="caja"
                                type="number"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Nombre de usuario:</label>
                            <input
                                className="caja"
                                type="text"
                                name="nombre_usuario"
                                value={formData.nombre_usuario}
                                onChange={(e) => setFormData({ ...formData, nombre_usuario: e.target.value })}
                                required
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
                                required
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
                                required
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
