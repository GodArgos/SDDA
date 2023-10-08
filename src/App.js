import "./App.css";
import Banner from "./paginas/components/Banner";
/* import Base from './paginas/Base'; //Esta es la pagina base, utilicenla para crear sus vistas */
import PerfilJuez from "./paginas/miPerfil/PerfilJuez";
import DemandaJuez from "./paginas/demandas/DemandaJuez";
import DetalleDemanda from "./paginas/detalleDemanda/DetalleDemanda";
import DetalleExpediente from "./paginas/detalleExpediente/DetalleExpediente";
import Login from "./paginas/inicioSesion/InicioSesion";
import Registro from "./paginas/registroUsuario/registro";
import Expediente from "./paginas/expediente/Expediente";
function App() {
    return (
        <div className="Principal">
            <Banner />
            <DetalleExpediente />
        </div>
        //Para usar el login se tiene que hacer aparte

        //<Registro />
    );
}

export default App;
