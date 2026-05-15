import './Topbar.css'

import { useAuthContext } from '../contexts/AuthContext'

function Topbar({ titulo, subtitulo }) {

  const { usuario } = useAuthContext()

  return (
    <header className="topbar">

      <section className="user-greeting">

        <span>
          { titulo }
        </span>

        <p className="welcome-message">
          { subtitulo }
        </p>

      </section>

      <figure className="user-avatar">
        <img src="/avatar.svg" alt="Avatar do usuário" />
      </figure>

    </header>
  )
}

export default Topbar