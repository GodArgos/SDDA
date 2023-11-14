import React from 'react';
import "./InicioSesion.css";
import BotonLogin from "../../components/BotonLogin";

export default function LoginForm({ formData, setFormData, handleLogin }) {
    return (
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
                <label>Tipo de usuario:</label>
                <input
                    className="number"
                    type="type"
                    name="type"
                    id="type"
                    value={formData.type}
                    onChange={(e) => setFormData({
                        ...formData,
                        type: e.target.value,
                    })}
                />
            </div>
            <div className="Elemento">
                <BotonLogin/>
            </div>
        </form>
    );
}
