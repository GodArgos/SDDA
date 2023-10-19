import React, { useContext } from 'react';
import UserContext from '../../../UserContext';
import BannerJuez from "../../../components/BannerJuez";
import InfoJuez from "./InfoJuez";

export default function PerfilJuez(props) {
    const { user } = useContext(UserContext);

    console.log("Usuario en PerfilJuez:", user);
    const func = props.func;
    const id = props.id;
    return (
        <>
            <BannerJuez func={func} />
            <div className="Contenido">
                <h1>Mi Perfil</h1>
                <p>Información general del perfil del juez.</p>
                <InfoJuez id={id} />
            </div>
        </>
    );
}
