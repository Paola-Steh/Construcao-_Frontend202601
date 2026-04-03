/* PÁG PRINCIPAL DASHBOARD */

import Card from "../components/Card";
import Layout from "./Layout";


// Topbar e Sidebar são layouts, então se coloca h2 e section

// ele tirou a div dps do return aqui, e em todas as .jsx
function Dashboard() {
    return <> 
        <Layout >
            <h2>Bem-vindo ao Portal do Aluno</h2>
            <section>
                <Card />
                <Card />
                <Card />
            </section>
        </Layout>
    </>
}

export default Dashboard;
