import { Link } from "react-router-dom";

export default function BotonVerDetalle(props) {

    const {dni} = props;
    const url = "/expedientes/" + dni;

    return(
        <Link to={url} className="BotonVerExpediente">Ver Expediente</Link>
    );
}
