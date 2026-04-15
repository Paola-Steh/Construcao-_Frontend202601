function Tabela() {
  return (
    <article>
      <h3>Tabela única - Título</h3>
      <table>
        <thead>

            {/* Ouu colocar assim:
            <h3> |2026|  </h3>
            */}

          <tr>
            <th>|2026|</th>
          </tr>

          <tr>
            <th>|Título coluna 1|</th>
            <th>|Título coluna 2|</th>
            <th>|Título coluna 3|</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>|Informação igual para todos|</td>
            <td>|"faltas, notas, boletos e requerimentos"|</td>
            <td>|Sem nada|</td>
          </tr>

          <tr>
            <td>|Informação igual para todos|</td>
            <td>|"faltas, notas, boletos e requerimentos"|</td>
            <td>|Sem nada|</td>
          </tr>

          <tr>
            <td>|Informação igual para todos|</td>
            <td>|"faltas, notas, boletos e requerimentos"|</td>
            <td>|Sem nada|</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
}

export default Tabela;

/* tr > linha      td > coluna  */
