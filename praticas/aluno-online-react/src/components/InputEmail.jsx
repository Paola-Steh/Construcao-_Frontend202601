import "./InputEmail.css";

function InputEmail() {
  return (
    <div className="input-group">
      <label htmlFor="email">Email</label>

      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
      />

      <span className="error-message">
        Email inválido
      </span>
    </div>
  );
}

export default InputEmail;