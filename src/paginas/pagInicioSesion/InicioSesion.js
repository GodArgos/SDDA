import React, { useState } from "react";
import BotonLogin from "../../components/BotonLogin";
import "./InicioSesion.css";
import logo from "../../imagenes/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState(""); 
    const [passw, setPassw] = useState(""); 

    const handleLogin = () => {
        // Aquí debes enviar los datos al servidor
        const data = {
            User: user,
            passw: passw
        };

        // Realizar una solicitud POST al servidor
        fetch('/url-del-servidor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            // Manejar la respuesta del servidor, por ejemplo, redirigir o mostrar un mensaje al usuario
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
                    <div className="Elemento">
                        <label>Usuario:</label>
                        <input
                            className="caja"
                            type="text"
                            name="User"
                            id="User"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div className="Elemento">
                        <label>Contraseña:</label>
                        <input
                            className="caja"
                            type="password"
                            name="passw"
                            id="passw"
                            value={passw}
                            onChange={(e) => setPassw(e.target.value)}
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
                </div>
            </div>
        </div>
    );
}
