import InfoInfSunarp from "./InfoInfSunarp";

export default function BoxInfSunarp(props) {
    return (
        <div id="InfSunarp">
            <div className="Box" id="BInfo">
                <h3>Formulario Sunarp:</h3>
                <InfoInfSunarp form={props.form}/>
            </div>
        </div>
    );
}
