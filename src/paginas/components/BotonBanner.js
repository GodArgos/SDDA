export default function BotonBanner(props) {
    return (
        <div className="BotonBanner">
            <img src={props.imagen} alt={props.texto} />
            <div className="texto">
                <p>{props.texto}</p>
            </div>
        </div>
    );
}
