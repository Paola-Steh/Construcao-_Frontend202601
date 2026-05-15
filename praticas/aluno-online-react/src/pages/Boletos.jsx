import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Topbar from '../components/Topbar'

function Boletos() {
  const boletos = [
    { vencimento: '15/01/2026', valor: '500,00', situacao: 'Pago' },
    { vencimento: '15/02/2026', valor: '500,00', situacao: 'Pago' },
    { vencimento: '15/03/2026', valor: '500,00', situacao: 'Pago' },
    { vencimento: '15/04/2026', valor: '700,00', situacao: 'Em atraso' },
    { vencimento: '15/05/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/06/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/07/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/08/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/09/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/10/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/11/2026', valor: '500,00', situacao: 'A Pagar' },
    { vencimento: '15/12/2026', valor: '500,00', situacao: 'A Pagar' }
  ]

  const colunas = ['Vencimento', 'Valor R$', 'Situação']

  return (
    <>
    <Topbar titulo="Meus Boletos  " />
    <div className="content-area">
      <Tabela colunas={colunas} dados={boletos} />
    </div>
    </>
  )
}

export default Boletos;
