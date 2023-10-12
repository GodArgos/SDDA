import { Link } from "react-router-dom";

export default function BotonVerDetalle(props) {

    const {url} = props;

    return(
        <Link to={url} className="BotonVerDetalle">Ver Detalle</Link>
    );
}
