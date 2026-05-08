import "./Sidebar.css";
import { Link, NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src="/learn.svg" alt="Logo" className="sidebar-logo" />
        <h1>Aluno Online</h1>
      </header>

      <nav className="sidebar-nav">
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
            <NavLink to="/requerimentos">
              Requerimentos
            </NavLink>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

