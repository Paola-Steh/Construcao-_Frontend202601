import "./Faltas.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Faltas() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content faltas-container">
        <Topbar />

        <header className="faltas-header">
          <h1>Aluno Online</h1>
          <h2>Minhas Faltas</h2>
        </header>

        <section className="semestre-card">
          <div className="semestre-header">
            <h3>2026.1</h3>
          </div>

          <div className="table-container">
            <table className="faltas-table">
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Faltas</th>
                  <th>Limite</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Construção de Frontend</td>
                  <td>4</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>BI e Data Warehousing</td>
                  <td>2</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Manutenção de Software e DevOps</td>
                  <td>1</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="semestre-card">
          <div className="semestre-header">
            <h3>2025.2</h3>
          </div>

          <div className="table-container">
            <table className="faltas-table">
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Faltas</th>
                  <th>Limite</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Banco de Dados</td>
                  <td>3</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>5</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Engenharia de Software</td>
                  <td>0</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Faltas;