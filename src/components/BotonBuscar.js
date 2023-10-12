export default function BotonEditar(props) {

    const func = props.func;

    return (
        <button onClick={func} className="BotonBuscar">Buscar</button>
        
    );
}

//<Link to={url} className="BotonVerExpediente">Buscar</Link>
