import proyectos from '../data/proyectos';
import ProyectoCard from './ProyectoCard';

const Proyectos = () => (
  <section id="proyectos" className="section">
    <h2>Proyectos</h2>
    <div className="proyectos-grid">
      {proyectos.map((p, i) => (
        <ProyectoCard key={i} {...p} />
      ))}
    </div>
  </section>
);

export default Proyectos;
