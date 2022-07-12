import { useState } from "react";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    console.log("cadastrou usuario");
  }
  const [name, setName] = useState();
  const [password, setpassword] = useState();
  return (
    <div>
      <h1>Meucadstro com git hub</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"            
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="cadastrar" />
        </div>
      </form>
    </div>
  );
}
export default Form;
