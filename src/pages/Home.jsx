import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/Home.css';
import fotoperfil1 from '../../src/assets/img/fotoperfil11.jpg';

const Home = () => {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    axios
      .get('/datos_personales_nadja.json')
      .then((response) => {
        console.log (response.data.perfil[0]);
        setPerfil(response.data.perfil[0]);
      })
      .catch((error) => {
        console.error('Error al cargar los datos del perfil:', error);
      });
  }, []);

  return (
    <section className="container">
      <div className="about">
        <img className="about-foto1" src={fotoperfil1} alt="Foto de Nadja" />

        <div className="about-texto">
          <div className="about-titulos">
            <h2>{perfil?.nombre1}</h2>
            <h3>{perfil?.nombre2}</h3>
            <h4>{perfil?.descripcion_perfil}</h4>
            <p>{perfil?.intro_perfil}</p>
          </div>

          <div className="social-icons">
            {perfil?.redes?.github && (
              <a href={perfil.redes.github} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            )}
            {perfil?.redes?.linkedin && (
              <a href={perfil.redes.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            )}
            <a href="/CV_Nadja.pdf" target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-file-arrow-down"></i>
            </a>
            {perfil?.email && (
            <a href={`mailto:${perfil.email}`}>
              <i className="fa-solid fa-envelope"></i>
            </a>
  )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;