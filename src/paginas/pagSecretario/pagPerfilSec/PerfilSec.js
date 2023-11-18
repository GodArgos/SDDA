import React, { useContext } from 'react';
import UserContext from '../../../UserContext';
import BannerSec from "../../../components/BannerSec";
import InfoSec from "./InfoSec";

export default function PerfilSec(props) {
    const { user } = useContext(UserContext);
    const func = props.func;

    return (
        <>
            <BannerSec func={func} />
            <div className="Contenido">
                <h1>Mi Perfil</h1>
                <p>Información general del perfil del secretario.</p>
                <div className="Box" id='BBlock'>
                    <InfoSec />
                </div>
            </div>
        </>
    );
}