const ProyectoCard = ({ titulo, descripcion, imagen, link }) => (
  <div className="proyecto">
    <img src={imagen} alt={titulo} />
    <div className="proyecto-content">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
    </div>
  </div>
);

export default ProyectoCard;
