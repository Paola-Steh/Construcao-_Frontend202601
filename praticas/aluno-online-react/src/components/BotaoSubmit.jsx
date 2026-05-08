import './BotaoSubmit.css'

function BotaoSubmit({ children }) {
  return <button type="submit" className="botao-submit">{children}</button>
}

export default BotaoSubmit;