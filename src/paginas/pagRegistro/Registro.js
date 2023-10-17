import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import BotonVolver from "../../components/BotonVolver";
import BotonRegistrar from "../../components/BotonRegistrar";
import Popup from "../../components/Popup";

import "./Registro.css";
import logo from "../../imagenes/logo.png";

const initialFormData = {
    dni: "",
    names: "",
    lastnames: "",
    sex: 1, // Inicialmente, establece el valor predeterminado como masculino (1).
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
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

    function handleError(error) {
        console.log('Ocurrió un error:', error);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setPasswordError(true);
            return;
        }

        // Elimina el campo "confirmPassword" antes de enviar la solicitud al servidor
        const { confirmPassword, ...formDataToSend } = formData;

        console.log("Valores que se enviarán al servidor:", formDataToSend);

        fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify(formDataToSend), // Enviar formDataToSend en lugar de formData
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error en la solicitud');
            }
        })
        .then((data) => {
            console.log("Respuesta del servidor:", data);
            setRegistrationSuccess(true);
            setFormData(initialFormData);
        })
        .catch(handleError);
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
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Nro. DNI:</label>
                            <input
                                className="caja caja-segunda"
                                type="number"
                                name="dni"
                                value={formData.dni}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        dni: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Nombre:</label>
                            <input
                                className="caja"
                                type="text"
                                name="names"
                                value={formData.names}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        names: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Apellidos:</label>
                            <input
                                className="caja"
                                type="text"
                                name="lastnames"
                                value={formData.lastnames}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        lastnames: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>
                        <div className="Elemento">
                            <label>Sexo:</label>
                            <select
                                className="caja-documento"
                                value={formData.sex}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        sex: parseInt(e.target.value),
                                    })
                                }
                            >
                                <option value={1}>Masculino</option>
                                <option value={2}>Femenino</option>
                                <option value={3}>Otro</option>
                            </select>
                        </div>
                        
                        <div className="Elemento">
                            <label>Nombre de usuario:</label>
                            <input
                                className="caja"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        username: e.target.value,
                                    })
                                }
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
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
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
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        confirmPassword: e.target.value,
                                    })
                                }
                                required
                            />
                        </div>

                        <div className="botones">
                            <BotonVolver onClick={volverLogin} />
                            <button type="submit" className="BotonRegistrar">
                                Registrar
                            </button>
                        </div>
                    </form>
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
                    texto="Las contraseñas no coinciden. Por favor, inténtelo de nuevo."
                />
            )}
        </div>
    );
}
