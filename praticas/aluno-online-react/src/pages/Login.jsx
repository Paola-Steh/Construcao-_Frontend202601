import "./Login.css";
import logo from "../assets/learn.svg";
import FormLogin from "../forms/FormLogin";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <img
          src={logo}
          alt="Imagem do logo"
          className="login-logo"
        />

        <h1>Aluno Online</h1>

        <FormLogin />
      </section>

      <footer className="login-footer">
        © 2026. Todos os direitos reservados.
      </footer>
    </main>
  );
}

export default Login;