import BoxDemanda from "./BoxDemanda";


export default function DemandaJuez(){
    return(
        <div className="Contenido">
            <h1>Demandas</h1>
            <p>En esta pestaña encontrará todas las demandas que le han sido asignadas.</p>
            <BoxDemanda/>
            
        </div>
    )
}