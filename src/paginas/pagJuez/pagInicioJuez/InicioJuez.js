import BannerJuez from "../../../components/BannerJuez";
import React from 'react';


export default function InicioPN(props) {
    const func = props.func;
    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <div className="Bienvenida">
                    <h1>Bienvenido Juez</h1>
                    <div className="Seccion">
                        En esta plataforma tendrá todas las herramientas
                        necesarias para ver la información correspondiente a las
                        demandas que han sido asignadas.
                    </div>
                </div>
            </div>
        </>
    );
}
