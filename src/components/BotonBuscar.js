import { Link } from "react-router-dom";

export default function BotonEditar(props) {
    
    const {url} = "/expedientes/" + props.dni;

    return (
        <Link to={url} className="BotonVerExpediente"></Link>
    );
}
