import InfoInfGen from "./InfoInfGen";
import "./BoxInfGen.css";

export default function BoxInfGen(props) {
    const infoDemanda = props.infoDemanda;
    return (
        <div id="InfGen">
            <div className="Box">
                <h3>Información general:</h3>
                <InfoInfGen infoDemanda={infoDemanda}/>
            </div>
        </div>
    );
}
