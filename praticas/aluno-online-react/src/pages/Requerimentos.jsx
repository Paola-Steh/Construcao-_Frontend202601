import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Topbar from '../components/Topbar'

function Requerimentos() {
  const requerimentos = [
    { tipo: 'Revisão de Menção', data: '15/12/2025', situacao: 'Indeferido' },
    { tipo: 'Dispensa de Disciplina', data: '12/06/2025', situacao: 'Indeferido' },
    { tipo: 'Trancamento de Matrícula', data: '05/01/2024', situacao: 'Deferido' },
    { tipo: 'Mudança de Turno', data: '10/10/2023', situacao: 'Deferido' },
    { tipo: 'Renovação de Matrícula', data: '20/02/2023', situacao: 'Deferido' }
  ]

  const colunas = ['Tipo de Requerimento', 'Data de Solicitação', 'Situação']

  return (
    <>
     <Topbar titulo="Meus Requerimentos" subtitulo=""/>
    <div className="content-area"></div>
      <Tabela colunas={colunas} dados={requerimentos} />
    </>
  )
}

export default Requerimentos;
