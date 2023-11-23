import { useNavigate } from "react-router-dom";

export default function BotonURL(props) {
    const {url} = props;
    const {texto} = props;
    const navigate = useNavigate();

    function handleClick(){
        navigate(url);
    }

    return(
        <button className="Boton" onClick={handleClick}>{texto}</button>
    );
}