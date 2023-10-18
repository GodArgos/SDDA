import React, { useState } from "react";
import "./InicioSesion.css";
import logo from "../../imagenes/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";
import LoginForm from "./LoginForm";

const initialFormData = {
    username: "",
    password: "",
};

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [showPopup, setShowPopup] = useState(false); 


    const handleLogin = (event) => {
        event.preventDefault(); 

        console.log("Valores que se enviarán al servidor:", formData);

        fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(result => {
        if (result.loginSuccess) {
            if (result.user.nro_colegiatura) { 
                navigate("/j");
            } else {
                navigate("/p");
            }
        } else {
            setShowPopup(true)
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
};

    return (
        <div className="pantallalogin">
            <div className="divsuperior">
                <img src={logo} alt="Logo" className="logo-image" />
            </div>
            <div className="divinferior">
                <div className="contenidologin">
                    <h1 id="h1">Iniciar Sesión</h1>
                    <LoginForm formData={formData} setFormData={setFormData} handleLogin={handleLogin} />
                    <div className="Elemento">
                        <p>
                            ¿No estás registrado?{" "}
                            <Link to="/Registro" className="rojo">
                                Registrate aquí
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            {showPopup && <Popup texto="Error al iniciar sesión. ¡Inténtalo de nuevo!" func={() => setShowPopup(false)} />} 
        </div>
    );
}