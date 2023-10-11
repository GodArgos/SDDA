import { NavLink } from "react-router-dom";
import BotonBanner from "./BotonBanner";

//imagenes
import Logo from "./Logo";
import inicio from "../../imagenes/inicio.png";
import perfil from "../../imagenes/perfil.png";
import expedientes from "../../imagenes/expedientes.png";
import demandas from "../../imagenes/demandas.png";
import logout from "../../imagenes/logout.png";

export default function Banner() {
    return (
        <div className="Banner">
            <Logo />
            <div className="Inferior">
                <div className="BotonSuperior">
                    <ul>
                        <li>
                            <NavLink to="/" className="BotonBanner">
                                <img src={inicio} alt="inicio"/>Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/perfil" className="BotonBanner">
                                <img src={perfil} alt="perfil"/>Mi Perfil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/expedientes" className="BotonBanner">
                            <img src={expedientes} alt="expedientes"/>Expedientes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/demandas" className="BotonBanner">
                                <img src={demandas} alt="demandas"/>Demandas
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="BotonInferior">
                    <BotonBanner imagen={logout} texto="Cerrar sesión" />
                </div>
            </div>
        </div>
    );
}
/* 
                <div className="BotonSuperior">
                    <BotonBanner imagen={inicio} texto="Inicio" />
                    <BotonBanner imagen={perfil} texto="Mi Perfil" />
                    <BotonBanner imagen={expedientes} texto="Expedientes" />
                    <BotonBanner imagen={demandas} texto="Demandas" />
                </div>
                <div className="BotonInferior">
                    <BotonBanner imagen={logout} texto="Cerrar sesión" />
                </div>
*/