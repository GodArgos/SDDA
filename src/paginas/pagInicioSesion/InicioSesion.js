import React, { useState, useContext } from "react";
import "./InicioSesion.css";
import logo from "../../imagenes/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Popup from "../../components/Popup";
import LoginForm from "./LoginForm";
import UserContext from "../../UserContext";
import { type } from "@testing-library/user-event/dist/type";

const initialFormData = {
    type: 0,
    username: "",
    password: "",
    
    
};

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [showPopup, setShowPopup] = useState(false); 
    const { setUser } = useContext(UserContext);

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
            console.log("Respuesta del servidor:", result);
            if (result.loginSuccess) {
                setUser(result.user);
    
                if (result.user.tipo === 0) { 
                    navigate("/P");
                } else if (result.user.tipo === 1){
                    navigate("/J");
                } else if (result.user.tipo === 2){
                    navigate("/S");
                }
            } else {
                console.log("Error en el inicio de sesión");
                setShowPopup(true);
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