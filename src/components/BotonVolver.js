import { Link } from "react-router-dom";

export default function BotonVolver(props) {

    const url = "/";

    return(
        <Link to={url} className="BotonVolver">Volver</Link>
    );
}
