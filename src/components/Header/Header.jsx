import { useEffect, useState } from 'react';
import './Header.css';
import icono from '../../../public/ane-favicon11.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const soltarMenu = () => {
        setMenuOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY>10);
        };

        window.addEventListener('scroll', handleScroll);
        return () =>window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="logo">
                <img src={icono} alt='Logo anemonadja' className='logo-img'/>
                <h1>anemonadja</h1>
            </Link>
            
            {/*esto es overlay. para mostrar fondo oscuro cuando el menu está abierto */}
            {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <Link to="/about" className="nav-link" onClick={soltarMenu}>ABOUT</Link>
                <Link to="/proyectos" className="nav-link"onClick={soltarMenu}>PROYECTOS</Link>
                <Link to="/galeria" className="nav-link"onClick={soltarMenu}>GALERÍA</Link>
            </nav>
                
                
            <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </header>
    );
};

export default Header