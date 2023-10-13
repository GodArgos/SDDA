import InfoInfSecretario from "./InfoInfSecretario";

export default function BoxInfSecretario() {
    return (
        <div id="InfSecretario">
            <div className="Box">
                <h3>Secretario Judicial:</h3>
                <InfoInfSecretario
                    nombres="ayuda"
                    apellidos="send help"
                    dni="24605182"
                    sexo="adios"
                    colegiatura="87544"
                />
            </div>
        </div>
    );
}
