export default function InfoDemanda(props){
    const infoDemanda = props.infoDemanda;
    console.log(infoDemanda)

    return(
        <div className="InfoDemanda">
            <p><b>Número de Demanda:</b> {infoDemanda.nro_demanda}</p>
            <p><b>Demandante:</b> {infoDemanda.PersonaNatural.nombreCompleto}</p>
            <p><b>Demandado:</b> {infoDemanda.Demandado.nombreCompleto}</p>
        
 
        </div>
    )
}
