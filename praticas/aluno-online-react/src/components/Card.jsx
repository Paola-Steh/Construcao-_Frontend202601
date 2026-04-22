import "./Card.css";

function Card() {
  return (
    <article className="card">
      <header className="card-header">
        <h2>Card único - Título</h2>
      </header>

      <div className="card-content">
        <ul>
          <li>Informação igual</li>
          <li>Informação adicional</li>
          <li>Mais detalhes</li>
        </ul>
      </div>
    </article>
  );
}

export default Card;