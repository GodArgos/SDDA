export default function BotonEditar(props) {
    const {func} = props;
    const {texto} = props;
    
    return <button type="submit" className="Boton" id="BAccion" onClick={func}>{texto}</button>;
}