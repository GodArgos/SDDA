export default function BotonSubmit(props) {
    const {texto} = props;
    
    return <button type="submit" className="Boton" id="BAccion">{texto}</button>;
}