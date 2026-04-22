import "./Dashboard.css";
import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-content dashboard-container">
        <Topbar />

        <section className="dashboard-header">
          <h2>Bem-vindo ao Portal do Aluno</h2>
        </section>

        <section className="dashboard-cards">
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </div>
  );
}

export default Dashboard;