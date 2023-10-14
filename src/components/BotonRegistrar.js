import { Link } from "react-router-dom";

export default function BotonRegistrar(props) {

    const {url} = props;

    return(
        <Link to={url} className="BotonRegistrar">Registrar</Link>
    );
}
