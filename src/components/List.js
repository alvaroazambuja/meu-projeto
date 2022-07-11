import Item from "./Item"
function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca = 'ferrari' ano_lancamento={1987} />
                <Item marca = 'fiat' ano_lancamento={2000} />
                <Item/>
            </ul>
        </>
    )
}
export default List