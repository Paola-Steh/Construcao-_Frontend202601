<<<<<<< HEAD
import { Routes, Route } from 'react-router'
import Dashboard from './pages/Dashboard'
import Faltas from './pages/Faltas'
import Notas from './pages/Notas'
import Boletos from './pages/Boletos'
import Requerimentos from './pages/Requerimentos'
import Layout from './pages/Layout'


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Dashboard />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/requerimentos" element={<Requerimentos />} />

      </Routes>
  )
=======
import Login from './pages/Login'

function App() {
  return <Login />
>>>>>>> 950f4f37db96797373b1d3ac4dc97b9834b15681
}

export default App;

