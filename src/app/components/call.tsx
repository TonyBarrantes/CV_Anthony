import React from 'react';
import Image from 'next/image';

const CallToAction = () => {
  const handleContact = () => {
    console.log('¡Contáctame para oportunidades laborales!');
  };

  return (
    <section id="call">
      <h1>¡Listo para nuevos desafíos!</h1>
      <p>
        Estoy disponible para analizar cómo mis habilidades y experiencia pueden alinearse con las necesidades de la empresa. <br />
        No dude en ponerse en contacto conmigo para programar una entrevista o discutir cualquier pregunta que pueda tener sobre mi experiencia.
      </p>
      <a href="mailto:tonybarrarojas09@gmail.com" onClick={handleContact}>
        <button className="contact-button">¡Contáctame!</button>
      </a>
      <div className="image-container">
        <Image src="/image/imagen10.jpg" width={500} height={250} alt="Imagen10Call" />
      </div>
    </section>
  );
};

export default CallToAction;
