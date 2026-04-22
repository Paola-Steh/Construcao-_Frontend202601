import "./Boletos.css";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content boletos-container">
        <Topbar />

        <header className="boletos-header">
          <h1>Aluno Online</h1>
          <h2>Meus Boletos</h2>
        </header>

        <section className="boletos-card">
          <div className="boletos-card-header">
            <h3>Boletos 2026.1</h3>
          </div>

          <table className="boletos-table">
            <thead>
              <tr>
                <th>Referência</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mensalidade Janeiro</td>
                <td>10/01/2026</td>
                <td>R$ 450,00</td>
                <td>
                  <span className="situacao-badge pago">Pago</span>
                </td>
              </tr>

              <tr>
                <td>Mensalidade Fevereiro</td>
                <td>10/02/2026</td>
                <td>R$ 450,00</td>
                <td>
                  <span className="situacao-badge atraso">Em atraso</span>
                </td>
              </tr>

              <tr>
                <td>Mensalidade Março</td>
                <td>10/03/2026</td>
                <td>R$ 450,00</td>
                <td>
                  <span className="situacao-badge a-pagar">A pagar</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="boletos-card">
          <div className="boletos-card-header">
            <h3>Boletos 2025.2</h3>
          </div>

          <table className="boletos-table">
            <thead>
              <tr>
                <th>Referência</th>
                <th>Vencimento</th>
                <th>Valor</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Mensalidade Outubro</td>
                <td>10/10/2025</td>
                <td>R$ 430,00</td>
                <td>
                  <span className="situacao-badge pago">Pago</span>
                </td>
              </tr>

              <tr>
                <td>Mensalidade Novembro</td>
                <td>10/11/2025</td>
                <td>R$ 430,00</td>
                <td>
                  <span className="situacao-badge pago">Pago</span>
                </td>
              </tr>

              <tr>
                <td>Mensalidade Dezembro</td>
                <td>10/12/2025</td>
                <td>R$ 430,00</td>
                <td>
                  <span className="situacao-badge pago">Pago</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Boletos;