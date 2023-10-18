export default function InfoInfSunarp(props){
    const FormSUNARP = props.form;
    
    return(
        <div className="InfoInfSunarp">
            <p> Nro de propiedades: {FormSUNARP.nro_propiedades}</p>
            <p> Nro de vehiculo: {FormSUNARP.nro_vehiculos}</p>
        </div>
    )
}