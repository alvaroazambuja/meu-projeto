import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [useremail, setuserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setuserEmail(email);
  }
  function limparEmail(e) {
    e.preventDefault();
    setuserEmail('');
  }
  return (
    <div>
      <h2>Cadastre seu email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar E-mail
        </button>
        {useremail && (
          <div>
            <p>O email é {useremail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}
export default Condicional;
