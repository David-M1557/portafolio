const Contacto = () => (
  <section id="contacto" className="section">
    <h2>Contacto</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder="Tu nombre" required />
      <input type="email" placeholder="Tu email" required />
      <textarea placeholder="Tu mensaje" rows="4" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <p>O escríbeme a: <a href="mailto:josemorabohada@gmail.com">josemorabohada@gmail.com</a></p>
  </section>
);

export default Contacto;
