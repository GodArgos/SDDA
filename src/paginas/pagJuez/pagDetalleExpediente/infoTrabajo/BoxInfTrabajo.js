import InfoInfTrabajo from "./InfoInfTrabajo";

export default function BoxInfTrabajo(props) {
    return (
        <div id="InfTrabajo">
            <div className="Box">
                <h3>Formulario Min. Trabajo:</h3>
                <InfoInfTrabajo form={props.form}/>
            </div>
        </div>
    );
}
