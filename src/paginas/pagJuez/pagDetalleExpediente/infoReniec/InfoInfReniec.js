export default function InfoInfReniec(props){
    const formRENIEC = props.form;

    const opcionesGenero = ["Masculino", "Femenino", "Otro"];
    const opcionesGrado = ["Educacion Inicial", "Educacion Primaria", "Educacion Secundaria", "Educacion Superior"]; 
    const opcionesEC = ["Soltero", "Casado", "Viudo", "Divorciado"];

    function generoTexto(valor) {
        return opcionesGenero[valor-1];
    }

    function gradoTexto(valor){
        return opcionesGrado[valor-1];
    }

    function estadoCivilTexto(valor){
        return opcionesEC[valor-1];
    }

    return(
        <div className="InfoInfReniec">
            <p> Nombres: {formRENIEC.nombres}</p>
            <p> Apellidos: {formRENIEC.apellidos}</p>
            <p> DNI: {formRENIEC.dni}</p>
            <p> Dirección: {formRENIEC.direccion}</p>
            <p> Sexo: {generoTexto(formRENIEC.sexoId)}</p>
            <p> Estado Civil: {estadoCivilTexto(formRENIEC.estadocivilId)}</p>
            <p> Grado de Instrucción: {gradoTexto(formRENIEC.gradoInstruccionId)}</p>
        </div>
    )
}