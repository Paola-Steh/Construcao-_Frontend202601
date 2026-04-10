/* PÁG PRINCIPAL DASHBOARD */

import Card from "../components/Card";
import Layout from "./Layout";

// Topbar e Sidebar são layouts, então se coloca h2 e section

// ele tirou a div dps do return aqui, e em todas as .jsx
function Dashboard() {
    const avisos = [
        "Eleição para representante",
        "Participe do IESB-SE"
    ];

    const datas = [
        "23/04 - Avaliação P1",
        "04/05 - Transferência de curso",
        "07/06 - Renovação de matrícula"
    ];

    const disciplinas = [
        "Construção de Frontend",
        "Devops",
        "BI e Data Warehousing"
    ];

  return (
      <Layout 
      titulo="Olá, Aluno" 
      subtitulo="Bem-vindo ao Portal do Aluno"
      >
        <Card titulo="Mural de Avisos" items={avisos} />
        <Card titulo="Calendário Acadêmico" items={datas}/>
        <Card titulo="Minhas Disciplinas" items={disciplinas}/>
      </Layout>
  );
}

export default Dashboard;
