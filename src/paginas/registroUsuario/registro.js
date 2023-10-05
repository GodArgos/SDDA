import React from "react";
import Logo from "../components/Logo";
import "./registro.css";
import logo from "../../imagenes/logo.png";

export default function Registro() {
    return (
        <div className="pantallalogin">
            <div className="divsuperior">
                <img src={logo} alt="Logo"  className="logo-image" /> 
            </div>
            <div className="divinferior">
                <div className="contenidologin">
                    <table>
                        <tbody>
                            <tr>
                                <td className="Elemento" >
                                    <h1>Registro de usuario</h1>
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label >Correo electrónico:</label>
                                    <input className="caja" type="text" name="User" id="User" />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label >Documento:</label>
                                    <input className="caja" type="text" name="doc" id="doc" />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label >Nombre completo:</label>
                                    <input className="caja" type="text" name="passw" id="passw" />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label >Número de celular:</label>
                                    <input className="caja" type="text" name="celu" id="celu" />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label >Contraseña:</label>
                                    <input className="caja" type="text" name="pass" id="pass" />
                                </td>
                            </tr>
                            <tr>
                                <td className="Elemento">
                                    <label >Confirmar contraseña:</label>
                                    <input className="caja" type="text" name="pass" id="pass" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input className="volver" type="submit" value="Volver" />
                                </td>
                                <td >
                                    <input className="registrar" type="submit" value="Registrar" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}