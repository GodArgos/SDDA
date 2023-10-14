import InfoInfPersona from "./InfoInfPersona";
import BotonVerExpediente from "../../../../components/BotonVerExpediente";
import "./BoxInfPersona.css";

export default function BoxInfDemandate() {
    const dni = "78964512";

    return (
        <div className="Box">
            <h3>Información personal del demandante: </h3>
            INFORMACIÓN DEL DEMANDANTE:
            <InfoInfPersona
                nombres="owo"
                apellidos="rescue cat"
                dni={dni}
                direccion="no"
                sexo="descubrelo"
            />
            <BotonVerExpediente dni={dni} />
        </div>
    );
}
