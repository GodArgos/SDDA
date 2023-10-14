import BannerJuez from "../../../components/BannerJuez";

export default function CrearDemanda(props) {
    const func = props.func;
    
    return (
        <>
            <BannerJuez func={func}/>
            <div className="Contenido">
                <h1>Crear Demanda</h1>
                <p>
                    En esta pestaña se podrá crear la demanda.
                </p>
            </div>
        </>
    );
}
