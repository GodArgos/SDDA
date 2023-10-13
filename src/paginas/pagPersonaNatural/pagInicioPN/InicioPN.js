import BannerPN from "../../../components/BannerPN";

export default function InicioPN(props) {
    const func = props.func;
    
    return (
        <>
            <BannerPN func={func}/>
            <div className="Contenido">
                <div className="Bienvenida">
                    <h1>Bienvenido Usuario</h1>
                    <div className="Seccion">
                        En esta plataforma tendrá todas las herramientas necesarias para ver la información
                        correspondiente a las demandas pendientes de su juzgado asignado.
                    </div>
                </div>
            </div>
        </>
    );
}
