import BoxDetalleDemanda from "./infoGeneral/BoxInfGen";
import InfoDetalleDemanda from "./InfoDetalleDemanda";

export default function DetalleDemanda(){
    return(
        <div className="Contenido">
            
            <h1>Demanda <InfoDetalleDemanda solicitud="4505"/></h1>

            <p>En esta pestaña encontrará toda la información referida a la demanda <InfoDetalleDemanda solicitud="4505"/>.</p>

            <BoxDetalleDemanda/>
            
        </div>
    )
}