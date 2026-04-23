import './InputMatricula.css'

function InputMatricula({ value, onChange, error }) {
  return (
    <fieldset className="input-group">
      <label htmlFor="matricula">Matrícula</label>
      <input
        type="text"
        id="matricula"
        name="matricula"
        value={value}
        onChange={onChange}
        placeholder="Digite sua matrícula"
        className={error ? 'input-error' : ''}
      />
      {error && <small className="error-message">{error}</small>}
    </fieldset>
  )
}

export default InputMatricula;