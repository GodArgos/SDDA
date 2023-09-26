import BotonEditar from "../components/BotonEditar";
import InfoJuez from "./InfoJuez";
import "./Perfil.css";

export default function PerfilJuez(){
    return(
        <div className="Contenido">
            <h1>Mi Perfil</h1>
            <p>Informacion general del perfil del juez.</p>
            <InfoJuez nombre="John" apellidos="James Vergara" genero="No binario" dni="12345678" nroCol="12345" dirJuz="Av. Consitucion"
                usuario="JohnJames12345"/>
            <br/>
            <BotonEditar/>
        </div>
    )
}