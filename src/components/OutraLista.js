function OutraLista({itens}) {
    return(
        <>

            
                <h3>Listas de coisas boas:</h3>
            
                { itens.length  > 0 ? (
                    itens.map((item, ind)=>(
                        <p key={ind}>{item}</p>
                    )))     : (
                    <p>Não há itens na lista!</p>
                    )
                }
            
        </>
    )
}
export default OutraLista