import { Link } from "react-router-dom";

export default function BotonLogin(props) {

    const {url} = props;

    return(
        <Link to={url} className="BotonLogin">Login</Link>
    );
}
