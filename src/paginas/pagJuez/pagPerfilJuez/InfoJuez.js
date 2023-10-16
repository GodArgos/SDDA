import { useState } from "react";

import BotonEditar from "../../../components/BotonEditar";
import BotonCancelar from "../../../components/BotonCancelar";
import BotonGuardarCambios from "../../../components/BotonGuardarCambios";

export default function InfoJuez(props) {
    const id = props.id;
    const [editable, setEditable] = useState(false);
    const [info, setInfo] = useState({
        id: { id },
        nombre: "John",
        apellidos: "James Vergara",
        sexo: "1",
        dni: "12345678",
        nroCol: "12345",
        dirJuz: "Av. Consitucion",
        usuario: "JohnJames12345",
    });
    const [infoEditada, setInfoEditada] = useState({ ...info });

    const opcionesGenero = ["Masculino", "Femenino", "Otro"];

    function generoTexto(valor) {
        if (valor === "1") {
            return "Masculino";
        } else if (valor === "2") {
            return "Femenino";
        } else {
            return "Otro";
        }
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
        setInfo({ ...infoEditada });
        setEditable(!editable);
        console.log("Se han guardado los cambios");
    }

    function cancelarEdicion() {
        setInfo({ ...info });
        setEditable(!editable);
        console.log("Se descartaron los cambios");
    }

    return (
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
                        {/* <input
                            type="text"
                            name="sexo"
                            placeholder={generoTexto(info.sexo)}
                            onChange={handleChange}
                            readOnly={!editable}
                        /> */}
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
                    <p>
                        <b>Número de Colegiatura: </b>
                        <input
                            type="text"
                            name="nroCol"
                            placeholder={info.nroCol}
                            onChange={handleChange}
                        />
                    </p>
                    <p>
                        <b>Dirección de Juzgado: </b>
                        <input
                            type="text"
                            name="dirJuz"
                            placeholder={info.dirJuz}
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
                    <p><b>Número de Colegiatura:</b> {info.nroCol}</p>
                    <p><b>Dirección de Juzgado:</b> {info.dirJuz}</p>
                    <br/>
                    <p><b>Usuario:</b> {info.usuario}</p>
                    <p><b>Contraseña:</b> ********</p>
                    <BotonEditar func={editarInfo} />
                </>
            )}
        </div>
    );
}
