import BannerJuez from "../../../components/BannerJuez";
import InfoJuez from "./InfoJuez";

export default function PerfilJuez(props) {
    const func = props.func;
    const id = props.id;

    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>Mi Perfil</h1>
                <p>Informacion general del perfil del juez.</p>
                <InfoJuez id={id}/>
            </div>
        </>
    );
}
