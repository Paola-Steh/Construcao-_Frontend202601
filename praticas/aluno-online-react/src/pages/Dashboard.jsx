/* PÁG PRINCIPAL DASHBOARD */

import Topbar from "../components/Topbar";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

// Topbar e Sidebar são layouts, então se coloca h2 e section

// ele tirou a div dps do return aqui, e em todas as .jsx
function Dashboard() {
  return (
    <>
      <Sidebar />
      <main>
        <Topbar />
        <h2>Bem-vindo ao Portal do Aluno</h2>
        <section>
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </>
  );
}

export default Dashboard;
