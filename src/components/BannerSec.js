import { NavLink } from "react-router-dom";
import BotonBanner from "./BotonBanner";

//imagenes para el banner
import Logo from "./Logo";
import inicio from "../imagenes/inicio.png";
import perfil from "../imagenes/perfil.png";
import demandas from "../imagenes/demandas.png";
import logout from "../imagenes/logout.png";

export default function Banner(props) {
    const func = props.func;

    return (
        <div className="Banner">
            <Logo />
            <div className="Inferior">
                <div className="BotonSuperior">
                    <ul>
                        <li>
                            <NavLink to="/S/" className="BotonBanner">
                                <img src={inicio} alt="inicio" />
                                <div className="NombreBoton">Inicio</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/S/perfil" className="BotonBanner">
                                <img src={perfil} alt="perfil" />
                                <div className="NombreBoton">Mi Perfil</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/S/solicitudes" className="BotonBanner">
                                <img src={demandas} alt="solicitudes" />
                                <div className="NombreBoton">Solicitudes</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/S/demandas-pendientes" className="BotonBanner">
                                <img src={demandas} alt="demandas-pendientes" />
                                <div className="NombreBoton">Demandas <br/> Pendientes</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="BotonInferior">
                    <BotonBanner
                        imagen={logout}
                        texto="Cerrar sesión"
                        func={func}
 
                    />
                </div>
            </div>
        </div>
    );
}
