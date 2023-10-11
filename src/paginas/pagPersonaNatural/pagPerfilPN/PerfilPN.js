import BotonEditar from "../../components/BotonEditar";
import InfoJuez from "./InfoPN";

export default function PerfilJuez() {
    return (
        <div className="Contenido">
            <h1>Mi Perfil</h1>
            <p>Informacion general del perfil del juez.</p>
            <InfoJuez
                nombre="Cesar"
                apellidos="Rasec"
                genero="Masculino"
                dni="87654321"
                usuario="Rasec123"
            />
            <br />
            <BotonEditar />
        </div>
    );
}
