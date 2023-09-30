import './App.css';
import Banner from './paginas/components/Banner';
/* import Base from './paginas/Base'; //Esta es la pagina base, utilicenla para crear sus vistas */
import PerfilJuez from './paginas/miPerfil/PerfilJuez';
import DemandaJuez from './paginas/demandas/DemandaJuez';
import DetalleDemanda from './paginas/detalleDemanda/DetalleDemanda';

function App() {
  return (
    <div className='Principal'>
      <Banner/>
      <DetalleDemanda/>
    </div>
  );
}

export default App;
