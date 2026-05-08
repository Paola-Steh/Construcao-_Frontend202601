import './InputSenha.css'

function InputSenha({ value, onChange, error }) {
  return (
    <fieldset className="input-group">
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={value}
        onChange={onChange}
        placeholder="Digite sua senha"
        className={error ? 'input-error' : ''}
      />
      {error && <small className="error-message">{error}</small>}
    </fieldset>
  )
}

export default InputSenha;

