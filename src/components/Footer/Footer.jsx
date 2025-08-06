import { useEffect, useState } from 'react';
import './Footer.css';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerEmail = async () => {
      try {
        const response = await axios.get('/datos_personales_nadja.json');
        const emailApi = response.data.perfil[0]?.email;
        if (emailApi) {
          setEmail(emailApi);
        } else {
          setError('Correo no disponible');
        }
      } catch (err) {
        console.error('Error al cargar el email del perfil:', err);
        setError('No se pudo cargar el correo');
      }
    };

    obtenerEmail();
  }, []);

  return (
    <footer className="footer">
      <h5>
        {error ? (
          <>{error}</>
        ) : (
          <a href={`mailto:${email}`} style={{ color: '#BCFFB0', textDecoration: 'none' }}>
            {email}
          </a>
        )}{" "}
        | &copy; anemonadja 2025
      </h5>
    </footer>
  );
};

export default Footer;