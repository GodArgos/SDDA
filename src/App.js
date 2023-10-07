import "./App.css";
import Banner from "./paginas/components/Banner";
/* import Base from './paginas/Base'; //Esta es la pagina base, utilicenla para crear sus vistas */
import PerfilJuez from "./paginas/miPerfil/PerfilJuez";
import DemandaJuez from "./paginas/demandas/DemandaJuez";
import DetalleDemanda from "./paginas/detalleDemanda/DetalleDemanda";
import Login from "./paginas/inicioSesion/InicioSesion";
import Registro from "./paginas/registroUsuario/registro";

function App() {
    return (
        /* <div className='Principal'>
      <Banner/>
      <DetalleDemanda/>
    </div>  
    Para usar el login se tiene que hacer aparte
    */

        <Login />
    );
}

export default App;
