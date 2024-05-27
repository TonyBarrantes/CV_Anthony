 "use client";

// import React from 'react';
// import Image from 'next/image';

// function AboutMe() {
//   const handleContact = () => {
//     // Puedes agregar lógica adicional aquí si es necesario
//     console.log('¡Contáctame para oportunidades laborales!');
//   };

//   return (
//     <div className="about container">
//             <main className="about d-flex">
//                 <div className="photo photoAbout col-lg-5 ml-4">
//                     <Image src="/image/aboutme.jpg" width={400} height={300} alt="ImageAbout1" />
//                 </div>
//                 <div className="greet greetAbout col-lg-7">
//           <section id="about">
//           <h2 style={{ textAlign: 'center' }}>About Me</h2>
//             {/* <h2>About Me</h2> */}
//             <p className="text-center">
//             Third year student of Business Informatics at the University of Costa Rica. <br />
//             Passionate about technology and its application in the business environment. <br />
//             My interest in this discipline arises from my love for how technology can transform business processes and improve operational efficiency. <br />
//             During my university career, I acquired skills in areas such as programming, database management, systems analysis. <br />
//             My goal is to continue developing both academically and professionally, taking advantage of the learning opportunities that arise during my university career and beyond. <br />
//               </p>
//             <div className="text-center mt-3">
//               <a href="https://www.linkedin.com/in/anthony-barrantes-rojas-39bb0830b" onClick={handleContact} className="btn btn-primary" style={{ display: 'inline-block' }}><button>¡Contact Me!</button></a>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AboutMe;

// import React from 'react';
// import Image from 'next/image';

// function AboutMe() {
//   const handleContact = () => {
//     // Puedes agregar lógica adicional aquí si es necesario
//     console.log('¡Contáctame para oportunidades laborales!');
//   };

//   return (
//     <div className="about container" id="about"> {/* Añade el id "about" para anclar la navegación */}
//       <main className="about d-flex">
//         <div className="photo photoAbout col-lg-5 ml-4">
//           <Image src="/image/aboutme.jpg" width={400} height={300} alt="ImageAbout1" />
//         </div>
//         <div className="greet greetAbout col-lg-7">
//           <section>
//             <h2 style={{ textAlign: 'center' }}>About Me</h2>
//             <p className="text-center">
//               Third year student of Business Informatics at the University of Costa Rica. <br />
//               Passionate about technology and its application in the business environment. <br />
//               My interest in this discipline arises from my love for how technology can transform business processes and improve operational efficiency. <br />
//               During my university career, I acquired skills in areas such as programming, database management, systems analysis. <br />
//               My goal is to continue developing both academically and professionally, taking advantage of the learning opportunities that arise during my university career and beyond.
//             </p>
//             <div className="text-center mt-3">
//               <a href="https://www.linkedin.com/in/anthony-barrantes-rojas-39bb0830b"  onClick={handleContact} className="btn btn-primary" style={{ display: 'inline-block' }}>¡Contact Me!</a>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AboutMe;

// import React from 'react';
// import Image from 'next/image';

// function AboutMe() {
//   const handleContact = () => {
//     // Puedes agregar lógica adicional aquí si es necesario
//     console.log('¡Contáctame para oportunidades laborales!');
//   };

//   return (
//     <div className="about container" id="about">
//       <main className="about d-flex">
//         <div className="photo photoAbout col-lg-5 ml-4">
//           <Image src="/image/aboutme.jpg" width={400} height={300} alt="ImageAbout1" />
//         </div>
//         <div className="greet greetAbout col-lg-7">
//           <section>
//             <h2 style={{ textAlign: 'center' }}>Acerca de mí</h2>
//             <p className="text-center" style={{ margin: 'auto', maxWidth: '70%' }}>
//             Estudiante de tercer año de Informática Empresarial de la Universidad de Costa Rica. <br />
//                 Apasionado de la tecnología y su aplicación en el entorno empresarial. <br />
//                 Mi interés en esta disciplina surge de mi amor por cómo la tecnología puede transformar los procesos de negocio y mejorar la eficiencia operativa. <br />
//                 Durante mi carrera universitaria adquirí habilidades en áreas como programación, manejo de bases de datos, análisis de sistemas. <br />
//                 Mi objetivo es seguir desarrollándome tanto académica como profesionalmente, aprovechando las oportunidades de aprendizaje que se presenten durante mi carrera universitaria y más allá.
//             </p>
//             <div className="text-center mt-3">
//               <button onClick={handleContact} className="btn btn-primary">¡Contáctame!</button>
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default AboutMe;

import React from 'react';
import Image from 'next/image';

function AboutMe() {
  const handleContact = () => {
    // Puedes agregar lógica adicional aquí si es necesario
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
            <p className="text-center" style={{ margin: 'auto', maxWidth: '70%' }}>
              Estudiante de tercer año de Informática Empresarial de la Universidad de Costa Rica. <br />
              Apasionado de la tecnología y su aplicación en el entorno empresarial. <br />
              Mi interés en esta disciplina surge de mi amor por cómo la tecnología puede transformar los procesos de negocio y mejorar la eficiencia operativa. <br />
              Durante mi carrera universitaria adquirí habilidades en áreas como programación, manejo de bases de datos, análisis de sistemas. <br />
              Mi objetivo es seguir desarrollándome tanto académica como profesionalmente, aprovechando las oportunidades de aprendizaje que se presenten durante mi carrera universitaria y más allá.
            </p>
            <div className="text-center mt-3">
              <div className="contact-button-container">
                <button onClick={handleContact} className="btn btn-primary">¡Contáctame!</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutMe;
