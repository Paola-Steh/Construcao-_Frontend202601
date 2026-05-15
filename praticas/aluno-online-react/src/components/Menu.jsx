import './Menu.css'

import { NavLink } from "react-router";

import { useAuthContext } from '../contexts/AuthContext'

function Menu() {

  const usuarioId = 0; //Pegou da API

    const { logout, usuario } = useAuthContext();

    const handleSair = () => {
      logout();
    }

  return (
    <nav className="menu">
      <h4>{usuario.nome}</h4>
      <h5>{usuario.email}</h5>
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/notas">Notas</NavLink>
        </li>
        <li>
          <NavLink to="/faltas">Faltas</NavLink>
        </li>
        <li>
          <NavLink to="/boletos">Boletos</NavLink>
        </li>
        <li>
          <NavLink to="/requerimentos">Requerimentos</NavLink>
        </li>
        <li>
          <Link to="/" onClick={handleSair}>Sair</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;