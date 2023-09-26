import './App.css';
import Banner from './paginas/components/Banner';
/* import Base from './paginas/Base'; //Esta es la pagina base, utilicenla para crear sus vistas */
import PerfilJuez from './paginas/miPerfil/PerfilJuez';
import DemandaJuez from './paginas/demandas/DemandaJuez';

function App() {
  return (
    <div className='Principal'>
      <Banner/>
      <DemandaJuez/>
    </div>
  );
}

export default App;
