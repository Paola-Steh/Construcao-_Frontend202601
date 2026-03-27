import "./App.css";
import logo from './assets/learn.svg';

function Cabecalho() {
  return (
      <header>
        <h1>Título</h1>
      </header>
  );
}

// componente é uma função //

  function App() { //use sempre maiusculo com os nomes das funções//
    // <div>
    //   <Cabecalho />
    //   <div>{ 2 + 2 }</div>
    //   <img src={logo} alt=" " />
    //   <p></p>
    // </div>
  return (
    <main>
  <img src={logo} alt="Icone chapeu formatura" />
  <h1>Aluno Online</h1>
  <label html for="matricula">Matrícula</label>
  <input type="number" id="matricula"
    name="matricula" />
    <p id="matriculaErro"></p>
  <label html for="senha">Senha</label>
  <input type="password" id="senha"
    name="senha" />
    <p id="senhalaErro"></p>
  <button type="submit">Entrar</button>
</main>
  );
}
// NÃO QUEBRAR LINHA NO return  ( a não ser que coloque "()", mas nn tem nem a necessidade //
// para isso, acionar o PRETTIER => ALT + SHIFT + F //

export default App;
