import './InputEmail.css'

function InputEmail({ value, onChange, error }) {
  return (
    <fieldset className="input-group">
      <label htmlFor="email">Senha</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Digite sua senha"
        className={error ? 'input-error' : ''}
      />
      {error && <small className="error-message">{error}</small>}
    </fieldset>
  )
}

export default InputEmail;
