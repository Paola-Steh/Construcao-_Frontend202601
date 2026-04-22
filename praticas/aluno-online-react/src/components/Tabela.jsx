import "./Tabela.css";

function Tabela() {
  return (
    <article className="tabela">
      <header className="tabela-header">
        <h3>2026</h3>
      </header>

      <table>
        <thead>
          <tr>
            <th>Disciplina</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Informação igual para todos</td>
            <td>Faltas, notas, boletos e requerimentos</td>
            <td>Sem nada</td>
          </tr>

          <tr>
            <td>Informação igual para todos</td>
            <td>Faltas, notas, boletos e requerimentos</td>
            <td>Sem nada</td>
          </tr>

          <tr>
            <td>Informação igual para todos</td>
            <td>Faltas, notas, boletos e requerimentos</td>
            <td>Sem nada</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default Tabela;