import { Link } from "react-router";

function Listagem() {
  return (
    <>
      <h1>Listagem de Produtos</h1>
      <Link to="/produtos/novo">+ Adicionar</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </>
  );
}

export default Listagem;
