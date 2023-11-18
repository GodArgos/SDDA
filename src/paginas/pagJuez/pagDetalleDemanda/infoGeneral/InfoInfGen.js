export default function InfoInfGen(props){
    const infoDemanda = props.infoDemanda;
    console.log(infoDemanda)
    return(
        <div className="InfoInfGen">
            <p>Descripcion: {infoDemanda.descripcion}</p>
            <p>Fecha de emision: {infoDemanda.fecha_emision}</p>
            {infoDemanda.fecha_audiencia && (
                <p>Fecha de Audiencia: {infoDemanda.fecha_audiencia}</p>
            )}
            
        </div>
    )
}