import "./App.css";
import BannerJuez from "./paginas/components/BannerJuez";
import BannerPN from "./paginas/components/BannerPN";
/* Vista de Inicio de sesión y Registro */
import InicioSesion from "./paginas/pagInicioSesion/InicioSesion";
import Registro from "./paginas/pagRegistro/Registro";
/* Vista del juez */
import InicioJuez from "./paginas/pagJuez/pagInicioJuez/InicioJuez";
import PerfilJuez from "./paginas/pagJuez/pagPerfilJuez/PerfilJuez";
import DemandaJuez from "./paginas/pagJuez/pagDemandas/DemandaJuez";
import DetalleDemanda from "./paginas/pagJuez/pagDetalleDemanda/DetalleDemanda";
/* Vista de persona natural */
import InicioPN from "./paginas/pagPersonaNatural/pagInicioPN/InicioPN";
import PerfilPN from "./paginas/pagPersonaNatural/pagPerfilPN/PerfilPN";
import LlenarDemanda from "./paginas/pagPersonaNatural/pagLlenarDemanda/LlenarDemanda";
//import LlenarDemandaPN from "./paginas/pagPersonaNatural/pagLlenarDemanda";

function App() {
    return (
        <div className="Principal">
            <BannerPN />
            <LlenarDemanda />
        </div>
        //Para usar el login se tiene que hacer aparte
        //<InicioSesion/>
    );
}

export default App;
