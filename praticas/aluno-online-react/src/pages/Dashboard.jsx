import Layout from '../components/Layout'
import Card from '../components/Card'
import Topbar from '../components/Topbar';
import { useAuthContext } from '../contexts/AuthContext';

function Dashboard() {
  const { usuario } = useAuthContext()
  return (
    
    <>
 <Topbar titulo={`Olá, ${usuario.nome}!`} subtitulo="Bem-vindo ao portal do aluno!" />

        <div className="content-area">


      <Card title="Mural de Avisos">
        <ul>
          <li>Inscrição para o projeto de extensão</li>
          <li>Eleição para representante de turma</li>
        </ul>
      </Card>

      <Card title="Calendário Acadêmico">
        <ul>
          <li>23/02 - Início do período letivo 2026-1</li>
          <li>25/04 - Prazo final para aplicação da P1</li>
          <li>23/06 - Prazo final para aplicação da P2</li>
          <li>04/07 - Fim do período letivo 2026-1</li>
        </ul>
      </Card>

      <Card title="Minhas Disciplinas">
        <ul>
          <li>BI e Data Warehousing</li>
          <li>Construção de Frontend</li>
          <li>Manutenção de Software e Devops</li>
        </ul>
      </Card>
      </div>
    </>
  )
}

export default Dashboard;
