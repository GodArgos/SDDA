import DetalleDemanda from "./DetalleDemanda"
import BotonVerDetalle from "../components/BotonVerDetalle"
import "./Box.css";


export default function BoxDemanda(){
    return(
        <div className="Box">

            <div className="BoxDemanda">
                <div className="BoxDemandaText">
                    <DetalleDemanda solicitud="1526" demandante="Marco Quispe" demandado="Erick Valderrama" tipo="Obligación de dar suma de dinero" />
                </div>
            </div>
            <div className="BoxDemanda2">
                    <BotonVerDetalle/>
            </div>
            
        </div>
        
    )
}