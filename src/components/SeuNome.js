function Seu({algo}) {
    return(
        <div>
            <p>Digite seu nome</p>
            <input type="text" name="" id="" placeholder="Qual é o seu nome?" 
            onChange={(e)=>algo( e.target.value )

            } />
        </div>
    )
}
export default Seu