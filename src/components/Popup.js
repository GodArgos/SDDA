export default function Popup(props){
    return (
        <div className="popup">
            <div className="popup-content">
                <span onClick={props.func} className="close-popup">
                    &times;
                </span>
                <p>{props.texto}</p>
            </div>
        </div>
    );
}