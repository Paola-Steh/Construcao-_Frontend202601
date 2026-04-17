
import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Login from './pages/Login';

function App() {
  const pagina = 0;
  
  // switch ... case ...   (tbm poderia ser feito)

  // se a condição for verdadeira (pagina == 1 &&), ele faz a segunda (<Dashboard />)

  return (
    <>
      {pagina == 0 && <Login />}      
      {pagina == 1 && <Dashboard />}  
      {pagina == 2 && <Notas />}
      {pagina == 3 && <Faltas />}
      {pagina == 4 && <Boletos />}
      {pagina == 5 && <Requerimentos />}
    </>
  )
}

export default App;
