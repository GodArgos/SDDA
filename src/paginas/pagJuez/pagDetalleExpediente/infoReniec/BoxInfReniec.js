import InfoInfReniec from "./InfoInfReniec";

export default function BoxInfReniec(props) {
    return (
        <div id="InfReniec">
            <div className="Box" id="BInfo">
                <h3>Formulario Reniec:</h3>
                <InfoInfReniec form={props.form}/>
            </div>
        </div>
    );
}
