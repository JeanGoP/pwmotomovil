import "./fichaTecnica.css";
const FichaTecnica = ({
    titulo1, valor1,
    titulo2, valor2,
    titulo3, valor3,
    titulo4, valor4,
    titulo5, valor5,
    titulo6, valor6,
    titulo7, valor7,
    titulo8, valor8,
  }) => {
    return (
      <div className="ficha-container">
        <div className="ficha-grid">
          <FichaItem titulo={titulo1} valor={valor1} />
          <FichaItem titulo={titulo2} valor={valor2} />
          <FichaItem titulo={titulo3} valor={valor3} />
          <FichaItem titulo={titulo4} valor={valor4} />
          <FichaItem titulo={titulo5} valor={valor5} />
          <FichaItem titulo={titulo6} valor={valor6} />
          <FichaItem titulo={titulo7} valor={valor7} />
          <FichaItem titulo={titulo8} valor={valor8} />
        </div>
      </div>
    );
  };
  
  const FichaItem = ({ titulo, valor }) => (
    <div className="ficha-item">
      <p className="ficha-titulo">{titulo}</p>
      <p className="ficha-valor">{valor || "No disponible"}</p>
    </div>
  );
  
  export default FichaTecnica;
  