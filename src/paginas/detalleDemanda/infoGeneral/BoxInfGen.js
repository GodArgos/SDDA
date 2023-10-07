import InfoInfGen from "./InfoInfGen";
import "./BoxInfGen.css";

export default function BoxInfGen() {
    return (
        <div id="InfGen">
            <div className="Box">
                <h3>Información general:</h3>
                <InfoInfGen
                    descripcion="owowowowowowowwowo"
                    fecha="06/03/2022"
                />
            </div>
        </div>
    );
}
