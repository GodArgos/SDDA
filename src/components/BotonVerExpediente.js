import { Link } from "react-router-dom";

export default function BotonVerExpediente(props) {

    const {dni} = props;
    const url = "/J/expedientes/" + dni;

    return(
        <Link to={url} className="BotonVerExpediente">Ver Expediente</Link>
    );
}
