export default function BotonBanner(props) {
    const func = props.func;

    return (
        <button className="BotonBanner" onClick={func}>
            <img src={props.imagen} alt={props.texto} />
            <div className="texto">
                <p>{props.texto}</p>
            </div>
        </button>
    );
}
/* 
<div className="BotonBanner">
            <img src={props.imagen} alt={props.texto} />
            <div className="texto">
                <p>{props.texto}</p>
            </div>
        </div> */
