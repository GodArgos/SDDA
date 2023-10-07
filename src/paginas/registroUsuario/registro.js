import React from "react";
import Logo from "../components/Logo";
import "./registro.css";
import logo from "../../imagenes/logo.png";

export default function Registro() {
  return (
    <div className="pantallalogin">
      <div className="divsuperior">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="divinferior">
        <div className="contenidologin">
       
        <h1 className="titulo">Registro de usuario</h1>
          
          <div className="Elemento">
            <label>Correo electrónico:</label>
            <input className="caja" type="text" name="User" id="User" />
          </div>
          <div className="Elemento">
          <label>Documento:</label>
          <div className="documento-container">
          
              <select className="caja-documento">
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Otro">Otro</option>
              </select>
              <input className="caja caja-segunda" type="number" name="doc" id="doc" />
            </div>
          </div>
          <div className="Elemento">
            <label>Nombre completo:</label>
            <input className="caja" type="text" name="passw" id="passw" />
          </div>
          <div className="Elemento">
            <label>Número de celular:</label>
            <input className="caja" type="number" name="celu" id="celu" />
          </div>
          <div className="Elemento">
            <label>Contraseña:</label>
            <input className="caja" type="text" name="pass" id="pass" />
          </div>
          <div className="Elemento">
            <label>Confirmar contraseña:</label>
            <input className="caja" type="text" name="pass" id="pass" />
          </div>
          <div className="botones">
            <input className="volver" type="submit" value="Volver" />
            <input className="registrar" type="submit" value="Registrar" />
          </div>
        </div>
      </div>
    </div>
  );
}
