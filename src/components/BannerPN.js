import { NavLink } from "react-router-dom";
import BotonBanner from "./BotonBanner";

//imagenes
import Logo from "./Logo";
import inicio from "../imagenes/inicio.png";
import perfil from "../imagenes/perfil.png";
import expedientes from "../imagenes/expedientes.png";
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
                            <NavLink to="/P/" className="BotonBanner">
                                <img src={inicio} alt="inicio" />
                                <div className="NombreBoton">Inicio</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/P/perfil" className="BotonBanner">
                                <img src={perfil} alt="perfil" />
                                <div className="NombreBoton">Mi Perfil</div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/P/demandas" className="BotonBanner">
                                <img src={demandas} alt="demandas" />
                                <div className="NombreBoton">
                                    Llenar Demandas
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <BotonBanner
                                imagen={expedientes}
                                texto="Revisar Demandas"
                            />
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
