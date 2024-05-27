"use client";

import React from 'react';
import Image from 'next/image';

function AboutMe() {
  const handleContact = () => {
    console.log('¡Contáctame para oportunidades laborales!');
  };

  return (
    <div className="about container" id="about">
      <main className="about d-flex">
        <div className="photo photoAbout col-lg-5 ml-4">
          <Image src="/image/aboutme.jpg" width={400} height={300} alt="ImageAbout1" />
        </div>
        <div className="greet greetAbout col-lg-7">
          <section>
            <h2 style={{ textAlign: 'center' }}>Acerca de mí</h2>
            <p className="text-center" style={{ margin: 'auto', maxWidth: '70%', marginBottom: '20px' }}>
              Estudiante de tercer año de Informática Empresarial de la Universidad de Costa Rica. <br />
              Apasionado de la tecnología y su aplicación en el entorno empresarial. <br />
              Mi interés en esta disciplina surge de mi amor por cómo la tecnología puede transformar los procesos de negocio y mejorar la eficiencia operativa. <br />
              Durante mi carrera universitaria he adquirido habilidades en áreas como programación, manejo de bases de datos, análisis de sistemas. <br />
              Mi objetivo es seguir desarrollándome tanto académica como profesionalmente, aprovechando las oportunidades de aprendizaje que se presenten durante mi carrera universitaria y más allá.
            </p>
            <div className="text-center mt-3">
              <div className="contact-button-container">
                <a href="https://www.linkedin.com/in/anthony-barrantes-rojas-39bb0830b/" onClick={handleContact}>
                  <button className="contact-button">¡Contáctame!</button>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutMe;
