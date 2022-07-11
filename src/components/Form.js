
function Form() {
    function cadastrarUsuario(e) {
            e.preventDefault()
            console.log('cadastrou usuario')
    }
    return(
        <div>
            <h1>Meucadstro com git hub</h1>
            <form onSubmit={cadastrarUsuario} >
                <div>
                    <input type="text" name="" id="" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value='cadastrar' />
                </div>
            </form>
        </div>
    )
}
export default Form