import React, { useState } from "react";
import BotonVolver from "../../components/BotonVolver";
import { useNavigate } from "react-router-dom";
import "./Registro.css";

export default function RegistroForm({ onSuccessfulRegistration, onPasswordError }) {
    const initialFormData = {
        dni: "",
        names: "",
        lastnames: "",
        sex: 1,
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);

    const volverLogin = () => {
        navigate("/");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            onPasswordError();
            return;
        }

        const { confirmPassword, ...formDataToSend } = formData;

        fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify(formDataToSend), 
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
            onSuccessfulRegistration();
            setFormData(initialFormData);
        })
        .catch(error => {
            console.log('Ocurrió un error:', error);
        });
    };

    return (
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
                                max="99999999"
                                min="0"
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
    );
}
