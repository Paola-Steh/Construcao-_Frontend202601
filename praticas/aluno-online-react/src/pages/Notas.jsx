import "./Notas.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content notas-container">
        <Topbar />

        <header className="notas-header">
          <h1>Aluno Online</h1>
          <h2>Minhas Notas</h2>
        </header>

        <section className="notas-card">
          <div className="notas-card-header">
            <h3>2026.1</h3>
          </div>

          <div className="table-container">
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>A1</th>
                  <th>A2</th>
                  <th>Média</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Construção de Frontend</td>
                  <td>8,5</td>
                  <td>9,0</td>
                  <td>8,8</td>
                </tr>
                <tr>
                  <td>BI e Data Warehousing</td>
                  <td>7,5</td>
                  <td>8,0</td>
                  <td>7,8</td>
                </tr>
                <tr>
                  <td>Manutenção de Software e DevOps</td>
                  <td>9,0</td>
                  <td>8,5</td>
                  <td>8,8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="notas-card">
          <div className="notas-card-header">
            <h3>2025.2</h3>
          </div>

          <div className="table-container">
            <table className="notas-table">
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>A1</th>
                  <th>A2</th>
                  <th>Média</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Banco de Dados</td>
                  <td>8,0</td>
                  <td>7,5</td>
                  <td>7,8</td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>9,0</td>
                  <td>8,5</td>
                  <td>8,8</td>
                </tr>
                <tr>
                  <td>Engenharia de Software</td>
                  <td>7,0</td>
                  <td>8,0</td>
                  <td>7,5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Notas;