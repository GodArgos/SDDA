export default function InfoInfGen(props){
    const infoDemanda = props.infoDemanda;
    return(
        <div className="InfoInfGen">
            <p>Descripcion: {infoDemanda.descripcion}</p>
            <p>Fecha de emision: {infoDemanda.fecha_emision}</p>
        </div>
    )
}