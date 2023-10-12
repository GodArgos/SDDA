import { NavLink } from "react-router-dom";
import BotonBanner from "./BotonBanner";

//imagenes para el banner
import Logo from "./Logo";
import inicio from "../imagenes/inicio.png";
import perfil from "../imagenes/perfil.png";
import expedientes from "../imagenes/expedientes.png";
import demandas from "../imagenes/demandas.png";
import logout from "../imagenes/logout.png";

export default function Banner() {
    return (
        <div className="Banner">
            <Logo />
            <div className="Inferior">
                <div className="BotonSuperior">
                    <ul>
                        <li>
                            <NavLink to="/" className="BotonBanner">
                                <img src={inicio} alt="inicio"/>
                                <div className="NombreBoton">Inicio</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/perfil" className="BotonBanner">
                                <img src={perfil} alt="perfil"/>
                                <div className="NombreBoton">Mi Perfil</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/expedientes" className="BotonBanner">
                                <img src={expedientes} alt="expedientes"/>
                                <div className="NombreBoton">Expedientes</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/demandas" className="BotonBanner">
                                <img src={demandas} alt="demandas"/>
                                <div className="NombreBoton">Demandas</div>
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