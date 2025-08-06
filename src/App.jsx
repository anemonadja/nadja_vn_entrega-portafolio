import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navigate } from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Proyectos from './pages/Proyectos';
import Galeria from './pages/Galeria';

function App() {

  return (
    <>
      <div className='layout'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>  
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App 