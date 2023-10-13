import InfoInfTrabajo from "./InfoInfTrabajo";

export default function BoxInfTrabajo() {
    return (
        <div id="InfTrabajo">
            <div className="Box">
                <h3>Formulario Min. Trabajo:</h3>
                <InfoInfTrabajo
                    trabajo="no trabajo"
                    ruc="786413"
                    ingreso="45896"
                    observacion="owowowowwo"
                />
            </div>
        </div>
    );
}
