import { useState } from "react";

import BotonEditar from "../../../components/BotonEditar";
import BotonCancelar from "../../../components/BotonCancelar";
import BotonGuardarCambios from "../../../components/BotonGuardarCambios";
import Popup from "../../../components/Popup";

export default function InfoPN(props){
    const id = props.id;
    const [editable, setEditable] = useState(false);
    const [info, setInfo] = useState({
        id: { id },
        nombre:"Cesar",
        apellidos:"Rasec",
        sexo:"1",
        dni:"87654321",
        usuario:"Rasec123"
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

    return(
        <div className="Info">
            {editable ? (
                <>
                    <p>
                        <b>Nombre: </b>
                        <input
                            type="text"
                            name="nombre"
                            placeholder={info.nombre}
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
                        <select name="sexo" onChange={handleChange}>
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
                            name="usuario"
                            placeholder={info.usuario}
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
                    <p><b>Nombre:</b> {info.nombre}</p>
                    <p><b>Apellidos:</b> {info.apellidos}</p>
                    <p><b>Sexo:</b> {generoTexto(info.sexo)}</p>
                    <p><b>DNI:</b> {info.dni}</p>
                    <br/>
                    <p><b>Usuario:</b> {info.usuario}</p>
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