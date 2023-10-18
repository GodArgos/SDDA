import React, { useState } from "react";
import BotonLogin from "../../components/BotonLogin";
import "./InicioSesion.css";
import logo from "../../imagenes/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


    const initialFormData = {
        username: "",
        password: "",

    };

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);


    const handleLogin = () => {

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
    
                
                alert("Inicio de sesión exitoso");
    
                
                navigate("/p");
            } else {
                
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
                    <form onSubmit={handleLogin}>
                    <div className="Elemento">
                        <label>Usuario:</label>
                        <input
                            className="caja"
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={(e) => setFormData({
                                ...formData,
                                username: e.target.value,
                            })}
                                                     
                        />
                    </div>
                    <div className="Elemento">
                        <label>Contraseña:</label>
                        <input
                            className="caja"
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={(e) => setFormData({
                                ...formData,
                                password: e.target.value,
                            })}
                        />
                    </div>
                    <div className="Elemento">
                        <BotonLogin onClick={handleLogin} />
                    </div>
                    <div className="Elemento">
                        <p>
                            ¿No estás registrado?{" "}
                            <Link to="/Registro" className="rojo">
                                Registrate aquí
                            </Link>
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}