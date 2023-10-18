import InfoInfSunarp from "./InfoInfSunarp";

export default function BoxInfSunarp(props) {
    return (
        <div id="InfSunarp">
            <div className="Box">
                <h3>Formulario Sunarp:</h3>
                <InfoInfSunarp form={props.form}/>
            </div>
        </div>
    );
}
