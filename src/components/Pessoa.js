function Pessoa({nome, idade, foto, profissão}) {
    return(
        <div>
            <img src={foto} alt="" />
            <h2>Nome: {nome} </h2> 
            <p>Idade:{idade}</p>        
            <p>Profissão:{profissão}</p>        
        </div>
    )
}
//em vez de:

// function Pessoa(props) {
//     return(
//         <div>
//             <img src={props.foto} alt="" />
//             <h2>Nome: {props.nome} </h2> 
//             <p>Idade:{props.idade}</p>        
//             <p>Pofissão:{props.profissão}</p>        
//         </div>
//     )
// }
export default Pessoa