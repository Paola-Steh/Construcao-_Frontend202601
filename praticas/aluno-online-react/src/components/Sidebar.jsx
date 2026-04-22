import "./Sidebar.css";
import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <img src={logo} alt="logotipo" className="sidebar-logo" />
        <h1>Aluno Online</h1>
      </header>

      <nav className="sidebar-nav">
        <Menu />
      </nav>
    </aside>
  );
}

export default Sidebar;