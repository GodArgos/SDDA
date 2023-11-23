import { useContext, useState, useEffect } from "react";
import UserContext from "../../../UserContext";

import BotonAccion from "../../../components/BotonAccion";
import BotonSubmit from "../../../components/BotonSubmit";
import Popup from "../../../components/Popup";

export default function InfoJuez() {
    const { user, setUser } = useContext(UserContext);

    const [editable, setEditable] = useState(false);
    const [info, setInfo] = useState({
        id: null,
        type: user.tipo,
        username: "",
        password: "",
        nombres: "",
        apellidos: "",
        nombreCompleto: "",
        dni: "",
        nro_colegiatura: "",
        correo:"",
        sexoId: null,
        juzgadoId: null,
        Sexo: "",
        Juzgado: "",
        nombreSexo: "",
        direccionJuzgado: "",
    });

    const [infoEditada, setInfoEditada] = useState({ ...info,
        confirmPassword: "",
        confirmNewPassword: ""
    });

    const [passwordError, setpasswordError] = useState(false);
    const [passwordNoMatchError, setpasswordNoMatchError] = useState(false);

    const opcionesGenero = ["Masculino", "Femenino", "Otro"];

    function generoTexto(valor) {
        return opcionesGenero[valor-1];
    }

    function contrasenaEcnriptada(){
        let contrasenaE = "";
        for (let index = 0; index < info.password.length; index++) {
            contrasenaE = contrasenaE + "*";
        }
        return contrasenaE;
    }

    function editarInfo() {
        setEditable(!editable);
        console.log("Ahora se puede editar");
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfoEditada({ ...infoEditada, [name]: value });
    };

    function handleSubmit(e){
        e.preventDefault();
        if(infoEditada.password !== infoEditada.confirmNewPassword){
            setpasswordNoMatchError(true);
        } else if(info.password !== infoEditada.confirmPassword){
            setpasswordError(true);
        } else {
            console.log("Se cambiaron las contraseñas:");
            fetch("http://localhost:3001/modify-profile", {
                method: 'POST', 
                headers: {"Content-type": "application/json",},
                body: JSON.stringify(infoEditada)
            })
                .then(response => response.json())
                .then(procesarDatoGuardado)
                .then(handleError)
            setUser({...user, "password": infoEditada.password});
            setEditable(!editable);
            console.log("Se han guardado los cambios");
        }
    }

    function cancelarEdicion() {
        setInfo({ ...info});
        setEditable(!editable);
        console.log("Se descartaron los cambios");
    }

    const closePNMPopup = () => {
        setpasswordNoMatchError(false);
    }
    
    const closePPopup = () => {
        setpasswordError(false);
    }

    function procesarDatoGuardado(data){
        const direc = info.direccionJuzgado
        setInfo({...data, "direccionJuzgado": direc });
        setInfoEditada( {...data, "direccionJuzgado": direc });
    }

    function procesarDato(data){
        setInfo({...data, "type": user.tipo});
        setInfoEditada({...data, "type": user.tipo});
    }

    useEffect(() => {
        const requestData = {
            type: user.tipo,
            username: user.username,
            password: user.password,
        };
        fetch("http://localhost:3001/profile", {
            method: 'POST', 
            headers: {"Content-type": "application/json",},
            body: JSON.stringify(requestData)
        })
            .then(response=> response.json())
            .then(procesarDato)
            .then(handleError)
    }, []);

    function handleError(error){
        if(error != null){
            console.log("Ocurrio un error:" + error);
        }
    }

    return (
        <div className="Info">
            {editable ? (
                <form className="Grid" id="GridContrasena" onSubmit={handleSubmit}>
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Nombre de Usuario</label>
                            <p>{info.username}</p>
                        </div>
                    </div>
                    <br/>
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Contraseña Actual</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                minLength={8}
                                placeholder={"Contraseña Actual"}
                                onChange={handleChange}
                                className="inputPerfil"
                                required
                            />
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Contraseña Nueva</label>
                            <input
                                type="password"
                                name="password"
                                minLength={8}
                                placeholder={"Contraseña Nueva"}
                                onChange={handleChange}
                                className="inputPerfil"
                                required
                            />
                        </div>
                    </div> 
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Confirmar Contraseña Nueva</label>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                minLength={8}
                                placeholder={"Confirmar Contraseña Nueva"}
                                onChange={handleChange}
                                className="inputPerfil"
                                required
                            />
                        </div>
                    </div>
                    <div className="Row" id="RowBoton">
                        <BotonSubmit texto={"Guardar Cambios"}/>
                        <BotonAccion func={cancelarEdicion} texto={"Cancelar"} estilo={"BAntiAccion"}/>
                    </div>
                </form>
            ) : (
                <div className="Grid">
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Nombre</label>
                            <p>{info.nombres}</p>
                        </div>
                        <div className="Column">
                            <label className="nomInfo">Apellidos</label>
                            <p>{info.apellidos}</p>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Sexo</label>
                            <p>{generoTexto(info.sexoId)}</p>
                        </div>
                        <div className="Column">
                            <label className="nomInfo">DNI</label>
                            <p>{info.dni}</p>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Número de Colegiatura</label>
                            <p>{info.nro_colegiatura}</p>
                        </div>
                        <div className="Column">
                            <label className="nomInfo">Dirección de Juzgado</label>
                            <p>{info.direccionJuzgado}</p>
                        </div>
                    </div>
                    <br/> 
                    <div className="Row">
                        <div className="Column">
                            <label className="nomInfo">Nombre de Usuario</label>
                            <p>{info.username}</p>
                        </div>
                        <div className="Column">
                            <label className="nomInfo">Contraseña</label>
                            <p>{contrasenaEcnriptada()}</p>
                        </div>
                    </div>
                    <div className="Row" id="RowBoton">
                        <BotonAccion func={editarInfo} texto={"Cambiar contraseña"}/>
                    </div>
                </div>
            )}
            {passwordError && (
                <Popup
                    func={closePPopup}
                    texto="La contraseña actual no es correcta."
                />
            )}
            {passwordNoMatchError && (
                <Popup
                    func={closePNMPopup}
                    texto="Las contraseñas no coinciden."
                />
            )}
        </div>
    );
}
