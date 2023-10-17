import { useState, useEffect } from "react";

import BotonEditar from "../../../components/BotonEditar";
import BotonCancelar from "../../../components/BotonCancelar";
import BotonGuardarCambios from "../../../components/BotonGuardarCambios";
import Popup from "../../../components/Popup";

export default function InfoPN(props){
    const usuario = {
        username: "carlos.gonzales",
        password: "password123"
    }
    const [editable, setEditable] = useState(false);
    const [info, setInfo] = useState({
        id: "",
        username:"",
        password:"",
        nombre:"",
        apellidos:"",
        sexoId:"",
        dni:"",
    });
    const [infoEditada, setInfoEditada] = useState({ ...info });
    const [dniError, setDniError] = useState(false);

    const opcionesGenero = ["Masculino", "Femenino", "Otro"];

    function generoTexto(valor) {
        return opcionesGenero[valor-1]
    }

    function editarInfo() {
        setEditable(!editable);
        console.log("Ahora se puede editar");;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfoEditada({ ...infoEditada, [name]: value });
    };

    function guardarCambios() {
        if (infoEditada.dni.length !== 8) {
            setDniError(true);
        } else {
            setInfo({ ...infoEditada });
            setEditable(!editable);
            console.log("Se han guardado los cambios");
        }
    }

    function cancelarEdicion() {
        setInfo({ ...info });
        setEditable(!editable);
        console.log("Se descartaron los cambios");
    }

    const closeDNIErrorPopup = () => {
        setDniError(false);
    };

    function procesarDato(data){
        console.log("Se recibio la siguiente info")
        console.log(data);
        setInfo(data);
    }

    useEffect(() => {
        console.log("Inicio de post");
        console.log(usuario);
        console.log(JSON.stringify(usuario));
        fetch("http://localhost:3001/profile-person", {
            method: 'POST', 
            headers: {"Content-type": "application/json",},
            body: JSON.stringify(usuario)
        })
            .then(response=> response.json())
            .then(procesarDato)
            .then(handleError)
    }, []);

    function handleError(error){
        console.log("Ocurrio un error:" + error);
    }

    return(
        <div className="Info">
            {editable ? (
                <>
                    <p>
                        <b>Nombre: </b>
                        <input
                            type="text"
                            name="nombres"
                            placeholder={info.nombres}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <b>Apellidos: </b>
                        <input
                            type="text"
                            name="apellidos"
                            placeholder={info.apellidos}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <b>Sexo: </b>
                        <select name="sexoId" onChange={handleChange}>
                            {opcionesGenero.map((opcion, index) => (
                            <option key={opcion} value={index + 1}>
                                {opcion}
                            </option>
                            ))}
                        </select>
                    </p>
                    <p>
                        <b>DNI: </b>
                        <input
                            type="text"
                            name="dni"
                            placeholder={info.dni}
                            onChange={handleChange}
                        />
                    </p>
                    <br />
                    <p>
                        <b>Usuario: </b>
                        <input
                            type="text"
                            name="username"
                            placeholder={info.username}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <b>Contraseña: </b> ********
                    </p>
                    <br />
                    <BotonGuardarCambios func={guardarCambios} />
                    <BotonCancelar func={cancelarEdicion} />
                </>
            ) : (
                <>
                    <p><b>Nombre:</b> {info.nombres}</p>
                    <p><b>Apellidos:</b> {info.apellidos}</p>
                    <p><b>Sexo:</b> {generoTexto(info.sexoId)}</p>
                    <p><b>DNI:</b> {info.dni}</p>
                    <br/>
                    <p><b>Usuario:</b> {info.username}</p>
                    <p><b>Contraseña:</b> ********</p>
                    <BotonEditar func={editarInfo} />
                </>
            )}
            {dniError && (
                <Popup
                    func={closeDNIErrorPopup}
                    texto="Coloque un DNI válido"
                />
            )}
        </div>
    )
}