export default function InfoInfTrabajo(props){
    const FormMINTRABAJO = props.form;
    return(
        <div className="InfoInfTrabajo">
            <p> Lugar de Trabajo: {FormMINTRABAJO.nom_lugar_trabajo}</p>
            <p> RUC Lugar de Trabajo: {FormMINTRABAJO.ruc_lugar_trabajo}</p>
            <p> Monto Ingreso: {FormMINTRABAJO.monto_ingreso}</p>
        </div>
    )
}