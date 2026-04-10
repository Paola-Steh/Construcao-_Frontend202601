
import Tabela from "../components/Tabela";

function Requerimentos() {
    return <Layout 
  titulo="Meus Requerimentos" 
  subtitulo="Faça solicitações online para a secretaria"
  >
    <Tabela />
    <Tabela />
    <Tabela />

  </Layout>;
}

/* Essa parte de cima é um componente, o Layout da página. 
Se percebe que tem esse corpo da função em todas  */

export default Requerimentos;


