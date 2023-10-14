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
import SolicitudDemanda from "./paginas/pagJuez/pagSolicitudDemanda/SolicitudDemanda";
/* Vista de persona natural */
import InicioPN from "./paginas/pagPersonaNatural/pagInicioPN/InicioPN";
import PerfilPN from "./paginas/pagPersonaNatural/pagPerfilPN/PerfilPN";
import LlenarDemanda from "./paginas/pagPersonaNatural/pagLlenarDemanda/LlenarDemanda";

function App() {
    /* Este vendría a ser el usuario que está ingresando a la página, en permission se ve el rol que ocupa, 
    puede ser "Juez" o "PN". */
    const [user, setUser] = useState({
        id: 1,
        name: "Miguel",
        permissions: ["Juez", "PN"],
    });

    const login = () => {
        setUser({ id: 1, name: "Miguel", permissions: ["PN"] });
    };

    const logout = () => {
        setUser(null);
        console.log("El usuario ha cerrado sesion.");
    };

    return (
        //Rutas de Juez
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
                                isAllowed={
                                    !!user && user.permissions.includes("Juez")
                                }
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
                            path="/J/solicitudes"
                            element={<SolicitudDemanda func={logout} />}
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
                                isAllowed={
                                    !!user && user.permissions.includes("PN")
                                }
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
    );
}

export default App;
