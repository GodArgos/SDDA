import BannerSec from "../../../components/BannerSec";
import React from "react";

export default function InicioSec(props) {
    const func = props.func;
    return (
        <>
            <BannerSec func={func} />
            <div className="Contenido">
                <div className="Bienvenida">
                    <h1>Bienvenido Secretario</h1>
                    <div className="Seccion">
                        En esta plataforma tendrá todas las herramientas
                        necesarias para ver la información correspondiente a las
                        demandas pendientes de su juzgado asignado.
                    </div>
                </div>
            </div>
        </>
    );
}
