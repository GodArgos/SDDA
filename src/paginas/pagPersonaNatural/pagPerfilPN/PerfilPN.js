import BannerPN from "../../../components/BannerPN";
import InfoPN from "./InfoPN";

export default function PerfilJuez(props) {
    const func = props.func;

    return (
        <>
            <BannerPN func={func} />
            <div className="Contenido">
                <h1>Mi Perfil</h1>
                <p>Informacion general del perfil del usuario.</p>
                <div className="Box" id="BBlock">
                    <InfoPN />
                </div>
            </div>
        </>
    );
}