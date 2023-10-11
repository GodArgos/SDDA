import BotonBanner from "./BotonBanner";
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
                    <BotonBanner imagen={inicio} texto="Inicio" />
                    <BotonBanner imagen={perfil} texto="Mi Perfil" />
                    <BotonBanner imagen={demandas} texto="Llenar Demanda" />
                    <BotonBanner imagen={expedientes} texto="Revisar Demandas" />
                </div>
                <div className="BotonInferior">
                    <BotonBanner imagen={logout} texto="Cerrar sesión" />
                </div>
            </div>
        </div>
    );
}
