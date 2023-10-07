import React from "react";
import Logo from "../components/Logo";
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
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h1>Iniciar Sesión</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label>Usuario:</label>
                                    <input
                                        className="caja"
                                        type="text"
                                        name="User"
                                        id="User"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label>Contraseña:</label>
                                    <input
                                        className="caja"
                                        type="password"
                                        name="passw"
                                        id="passw"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        className="entrar"
                                        type="submit"
                                        value="Login"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <p>¿No estás registrado? Regístrate aquí</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
