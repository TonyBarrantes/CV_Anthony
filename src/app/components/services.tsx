"use client";

// import React from 'react'

// function Services(){
//   return(
//       <div className="services container d-flex">
//           <div className="saludo intro col-lg-6">
//           <section id="services">
//               <h1>My <span> Services </span></h1>
//               <p>Learn more about my skills in which I excel more and have more knowledge</p>
//               <p>Also you can see my projects in next button</p>
//           </section>
//               <a className="btnp btn-about" href="#projects">See Projects</a>
//           </div>
//           <div className="list-services col-lg-6">
//               <ol>
//                   <li><span>01.</span> Html 5</li>
//                   <li><span>02.</span> Css</li>
//                   <li><span>03.</span> Boostrap</li>
//                   <li><span>04.</span> React</li>
//                   <li><span>05.</span> Git & github</li>
//                   <li><span>06.</span> NextJs</li>
//               </ol>
//           </div>
//       </div>

//   )
// }
// export default Services

// import React from 'react';

// function Services() {
//   return (
//     <div className="services container d-flex">
//       <div className="saludo intro col-lg-6">
//         <section id="services">
//           <h2><span> Habilidades </span></h2>
//           <h1>Habilidades Técnicas</h1>
//           <p>
//             Programación: Python, HTML/CSS, JavaScript.<br />
//             Base de datos: Experiencia con MySQL.<br />
//             Herramientas de desarrollo: Git, Visual Studio Code, Visual Studio 2022<br />
//             </p>
//             <h1>Habilidades Interpersonales</h1>
//             <p>
//             Comunicación efectiva: Capacidad para transmitir ideas de manera clara y concisa.<br />
//             Trabajo en equipo: Experiencia en colaborar con equipos multidisciplinarios para lograr objetivos comunes.<br />
//             Liderazgo: Habilidad para motivar y guiar a otros hacia el éxito del proyecto.<br />
//             Resolución de problemas: Destreza en identificar y abordar desafíos de manera eficiente y creativa.<br />
//             </p>
//             <h1>Idiomas</h1>
//             <p>
//             Español.<br />
//             Inglés: Nivel avanzado.<br />
//             </p>
//         </section>
//       </div>
//       </div>
//   );
// }

// export default Services;

// import React from 'react';

// function Services() {
//   return (
//     <div className="services container d-flex">
//       <div className="saludo intro col-lg-4">
//         <section id="services">
//           <div>
//             <h1>Habilidades Técnicas</h1>
//             <p>
//               Programación: Python, HTML/CSS, JavaScript.<br />
//               Base de datos: Experiencia con MySQL.<br />
//               Herramientas de desarrollo: Git, Visual Studio Code, Visual Studio 2022<br />
//             </p>
//           </div>
//         </section>
//       </div>
//       <div className="saludo intro col-lg-4">
//         <section id="services">
//           <div>
//             <h1>Habilidades Interpersonales</h1>
//             <p>
//               Comunicación efectiva: Capacidad para transmitir ideas de manera clara y concisa.<br />
//               Trabajo en equipo: Experiencia en colaborar con equipos multidisciplinarios para lograr objetivos comunes.<br />
//               Liderazgo: Habilidad para motivar y guiar a otros hacia el éxito del proyecto.<br />
//               Resolución de problemas: Destreza en identificar y abordar desafíos de manera eficiente y creativa.<br />
//             </p>
//           </div>
//         </section>
//       </div>
//       <div className="saludo intro col-lg-4">
//         <section id="services">
//           <div>
//             <h1>Idiomas</h1>
//             <p>
//               Español.<br />
//               Inglés: Nivel avanzado.<br />
//             </p>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Services;

import React from 'react';

function Services() {
  return (
    <div className="services container d-flex">
      <div className="saludo intro col-lg-4" style={{ borderRight: '1px solid #ccc', height: '100%' }}>
        <section id="services" style={{ height: '100%' }}>
          <div style={{ height: '100%' }}>
            <h1 style={{ marginBottom: '20px' }}>Habilidades Técnicas</h1>
            <p>
              Programación: Python, HTML/CSS, JavaScript.<br />
              Base de datos: Experiencia con MySQL.<br />
              Herramientas de desarrollo: Git, Visual Studio Code, Visual Studio 2022<br />
            </p>
          </div>
        </section>
      </div>
      <div className="saludo intro col-lg-4" style={{ borderRight: '1px solid #ccc', height: '100%' }}>
        <section id="services" style={{ height: '100%' }}>
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <h1 style={{ marginBottom: '10px', marginTop: 0 }}>Habilidades Interpersonales</h1>
            <p style={{ marginTop: 0 }}>
              Comunicación efectiva: Capacidad para transmitir ideas de manera clara y concisa.<br />
              Trabajo en equipo: Experiencia en colaborar con equipos multidisciplinarios para lograr objetivos comunes.<br />
              Liderazgo: Habilidad para motivar y guiar a otros hacia el éxito del proyecto.<br />
              Resolución de problemas: Destreza en identificar y abordar desafíos de manera eficiente y creativa.<br />
            </p>
          </div>
        </section>
      </div>
      <div className="saludo intro col-lg-4" style={{ height: '100%' }}>
        <section id="services" style={{ height: '100%' }}>
          <div style={{ height: '100%' }}>
            <h1 style={{ marginBottom: '20px' }}>Idiomas</h1>
            <p>
              Español.<br />
              Inglés: Nivel avanzado.<br />
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
