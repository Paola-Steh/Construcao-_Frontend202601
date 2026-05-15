import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Erro404 from "./pages/Erro404";

import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { logado } = useAuthContext();

  if (!logado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

   return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route path="requerimentos" element={<Requerimentos />} />
      </Route>

      <Route path="/login" element={<Navigate to="/" />} />
      <Route path="*" element={<Erro404 />} />
    </Routes>
  );
}


export default App;
