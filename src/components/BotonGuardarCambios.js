export default function BotonEditar(props) {
    const func = props.func;

    return <button className="BotonEditar" onClick={func}>Guardar Cambios</button>;
}
