import { Link } from "react-router-dom";

export default function BotonVerDetalle(props) {
    const {url} = props;
    const {texto} = props;

    return(
        <Link to={url} className="Boton">{texto}</Link>
    );
}