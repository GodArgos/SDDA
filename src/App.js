import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import BannerJuez from "./components/BannerJuez";
import BannerPN from "./components/BannerPN";
/* Vista de Inicio de sesión y Registro */
import InicioSesion from "./paginas/pagInicioSesion/InicioSesion";
import Registro from "./paginas/pagRegistro/Registro";
/* Vista del juez */
import InicioJuez from "./paginas/pagJuez/pagInicioJuez/InicioJuez";
import PerfilJuez from "./paginas/pagJuez/pagPerfilJuez/PerfilJuez";
import DemandaJuez from "./paginas/pagJuez/pagDemandas/DemandaJuez";
import DetalleDemanda from "./paginas/pagJuez/pagDetalleDemanda/DetalleDemanda";
import DetalleExpediente from "./paginas/pagJuez/pagDetalleExpediente/DetalleExpediente";
import Expediente from "./paginas/pagJuez/pagExpedientes/Expediente";
/* Vista de persona natural */
import InicioPN from "./paginas/pagPersonaNatural/pagInicioPN/InicioPN";
import PerfilPN from "./paginas/pagPersonaNatural/pagPerfilPN/PerfilPN";
import LlenarDemanda from "./paginas/pagPersonaNatural/pagLlenarDemanda/LlenarDemanda";

function App() {
    return (
        //Rutas de Juez
        <div className="Principal">
            <BrowserRouter >
                <BannerJuez />
                <Routes>
                    <Route path="/" element={<InicioJuez />} />
                    <Route path="/perfil" element={<PerfilJuez />} />
                    <Route path="/demandas" element={<DemandaJuez />} />
                    <Route path="/expedientes" element={<Expediente />} />
                    <Route path="/*" element={<h1 className="Contenido">404 Pagina no encontrada</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
