import UserContext from "./UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

/* Vista de Inicio de sesión y Registro */
import Login from "./paginas/pagInicioSesion/InicioSesion";
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

/* Vista de secretario*/
import InicioSec from "./paginas/pagSecretario/pagInicioSec/InicioSec";
import PerfilSec from "./paginas/pagSecretario/pagPerfilSec/PerfilSec";
import SolicitudDemanda from "./paginas/pagSecretario/pagSolicitudDemanda/SolicitudDemanda";
import CrearDemanda from "./paginas/pagSecretario/pagCrearDemanda/CrearDemanda";
import MisDemandas from "./paginas/pagPersonaNatural/pagMisDemandas/misDemandas";

function App() {
    const [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
        console.log("El usuario ha cerrado sesion.");
    };

    const login = () => {
        setUser({ id: 1, name: "Miguel", permissions: ["PN"] });
    };

    return (
        <UserContext.Provider value={{ user, setUser }}>
        <div className="Principal">
            <BrowserRouter>
                <Routes>
                    {/* Rutas que pueden ser accedidas sin tener usuario registrado */}
                    <Route path="/" element={<Login />} />
                    <Route path="/registro" element={<Registro />} />
                    {/* Ruta protegida de las vistas de Juez */}

                    
                    <Route
                    
                        element={
                        
                            <ProtectedRoute
                            
                            isAllowed={!!user && user.tipo === 1}
                            />
                        }
                    >
                        <Route
                            path="/J/"
                            element={<InicioJuez func={logout} />}
                        />
                        <Route
                            path="/J/perfil"
                            element={<PerfilJuez func={logout} />}
                        />
                        <Route
                            path="/J/demandas"
                            element={<DemandaJuez func={logout} />}
                        />
                        <Route
                            path="/J/demandas/:id"
                            element={<DetalleDemanda func={logout} />}
                        />
                        <Route
                            path="/J/expedientes"
                            element={<Expediente func={logout} />}
                        />
                        <Route
                            path="/J/expedientes/:dni"
                            element={<DetalleExpediente func={logout} />}
                        />
                    </Route>
                    {/* Ruta protegida de las vistas de persona natural */}
                    <Route
                        element={
                            <ProtectedRoute
                            isAllowed={!!user && user.tipo === 0}
                            />
                        }
                    >
                        <Route
                            path="/P/"
                            element={<InicioPN func={logout} />}
                        />
                        <Route
                            path="/P/perfil"
                            element={<PerfilPN func={logout} />}
                        />
                        <Route
                            path="/P/demandas"
                            element={<LlenarDemanda func={logout} />}
                        />
                        <Route
                            path="/P/demandas/:id"
                            element={<DetalleDemanda func={logout} />}
                        />
                        <Route
                            path="/P/misdemandas"
                            element={<MisDemandas func={logout}/>}
                        />
                    </Route>

                    {/* Ruta protegida de las vistas de secretario */}
                    <Route
                        element={
                            <ProtectedRoute
                            isAllowed={!!user }
                            />
                        }
                    >
                        <Route
                            path="/S/"
                            element={<InicioSec func={logout} />}
                        />
                        <Route
                            path="/S/perfil"
                            element={<PerfilSec func={logout} />}
                        />
                        <Route
                            path="/S/solicitudes"
                            element={<SolicitudDemanda func={logout} />}
                        />
                        <Route
                            path="/S/solicitudes/:id"
                            element={<CrearDemanda func={logout} />}
                        />
                    </Route>

                    <Route
                        path="/*"
                        element={
                            <h1 className="Contenido">
                                404 Pagina no encontrada
                            </h1>
                        }
                    />
                </Routes>
            </BrowserRouter>
            

           
        
        </div>
        </UserContext.Provider>
        
    );
}

export default App;
