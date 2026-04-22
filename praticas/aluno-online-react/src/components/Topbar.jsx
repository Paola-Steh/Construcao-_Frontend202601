import "./Topbar.css";
import avatar from "../assets/avatar.svg";

function Topbar() {
  return (
    <header className="topbar">
      <div className="user-greeting">
        <span>Olá, Aluno!</span>
        <p className="welcome-message">Bem-vindo de volta 👋</p>
      </div>

      <div className="user-avatar">
        <img src={avatar} alt="Imagem do Avatar" />
      </div>
    </header>
  );
}

export default Topbar;