export default function BotonAccion(props) {
    const {func} = props;
    const {texto} = props;
    const {estilo} = props;
    
    return <button className="Boton" id={estilo? estilo: "BAccion"} onClick={func}>{texto}</button>;
}