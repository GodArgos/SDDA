import InfoInfReniec from "./InfoInfReniec";
import BotonVerExpediente from "../../components/BotonVerExpediente";

export default function BoxInfReniec() {
    return (
        <div id="InfReniec">
            <div className="Box">
                <h3>Formulario Reniec:</h3>
                <InfoInfReniec
                    nombres="amigo"
                    apellidos="ya no puedo"
                    dni="7854100"
                    direccion="av. que ya se acabe porfa"
                    sexo="no"
                    civil="matenme"
                    grado="owo"
                />
                <BotonVerExpediente/>
            </div>
        </div>
    );
}
