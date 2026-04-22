import "./Requerimentos.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Requerimentos() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content requerimentos-container">
        <Topbar />

        <header className="requerimentos-header">
          <h1>Aluno Online</h1>
          <h2>Meus Requerimentos</h2>
        </header>

        <section className="requerimentos-card">
          <table className="requerimentos-table">
            <thead>
              <tr>
                <th>Requerimento</th>
                <th>Data</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Declaração de matrícula</td>
                <td>10/03/2026</td>
                <td>
                  <span className="situacao-badge deferido">Deferido</span>
                </td>
              </tr>

              <tr>
                <td>Revisão de nota</td>
                <td>22/03/2026</td>
                <td>
                  <span className="situacao-badge indeferido">Indeferido</span>
                </td>
              </tr>

              <tr>
                <td>Trancamento de disciplina</td>
                <td>05/04/2026</td>
                <td>
                  <span className="situacao-badge deferido">Deferido</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Requerimentos;