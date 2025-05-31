import Header from './components/Header';
import Navbar from './components/Navbar';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <SobreMi />
      <Habilidades />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
