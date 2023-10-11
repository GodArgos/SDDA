import React from "react";
import "./InicioSesion.css";
import logo from "../../imagenes/logo.png";

export default function Login() {
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
                        />
                    </div>
                    <div className="Elemento">
                        <label>Contraseña:</label>
                        <input
                            className="caja"
                            type="password"
                            name="passw"
                            id="passw"
                        />
                    </div>
                    <div className="Elemento">
                        <input className="entrar" type="submit" value="Login" />
                    </div>
                    <div className="Elemento">
                        <p>
                            ¿No estás registrado?{" "}
                            <span className="rojo">Regístrate aquí</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
