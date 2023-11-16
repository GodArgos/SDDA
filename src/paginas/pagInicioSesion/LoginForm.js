import React from 'react';
import "./InicioSesion.css";
import BotonLogin from "../../components/BotonLogin";

export default function LoginForm({ formData, setFormData, handleLogin }) {
    return (
        <form className="formularioLogin" onSubmit={handleLogin}>
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
                <label>Tipo de usuario:</label>
                <select 
                    className="SelectCajaLogin"
                    name="type" 
                    id="type"
                    onChange={(e) => setFormData({
                        ...formData,
                        type: e.target.value,
                    })}>
                    <option value={0}>Persona Natural</option>
                    <option value={1}>Juez</option>
                    <option value={2}>Secretario</option>
                </select>
            </div>
            <div className="Elemento">
                <BotonLogin/>
            </div>
        </form>
    );
}
