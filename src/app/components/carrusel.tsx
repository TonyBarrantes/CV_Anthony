"use client"; 

//  import { Carousel } from 'react-responsive-carousel';
//  import 'react-responsive-carousel/lib/styles/carousel.min.css';

//  interface Repository {
//      id: number;
//      name: string;
//  }

//  interface CarruselProps {
//      repos: Repository[];
//  }

//  const CarouselComponent = ({repos}: CarruselProps) => {

//      return (
//      <section className='seccionproj'>
//      <h1 className='projct'>My <span>Projects</span></h1>
//      <Carousel>
//    {repos.map((repo) => (
//            <div key={repo.id}>
//            <div className='Almacen container'>
//                  <a href= {`https://github.com/TonyBarrantes/${repo.name}`} target="_blank" className= 'rLink' >{repo.name}</a>
//              </div>
//          </div>
//        ))}
//      </Carousel>
//      </section>
//    );
//  };

//  export default CarouselComponent;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// interface Repository {
//     id: number;
//     name: string;
// }

// interface CarruselProps {
//     repos: Repository[];
// }

// const CarouselComponent = ({repos}: CarruselProps) => {

//   return (
//     <section className='seccionproj'>
//       <h1 className='projct'>My <span>Projects</span></h1>
//       <Carousel>
//         {repos.map((repo) => (
//           <div key={repo.id}>
//             <div className='Almacen container'>
//               {/* Utiliza estilos inline para hacer que el nombre del proyecto sea más grande */}
//               <a href={`https://github.com/TonyBarrantes/${repo.name}`} target="_blank" className='rLink' style={{ fontSize: '24px', fontWeight: 'bold' }}>{repo.name}</a>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// };

// export default CarouselComponent;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// interface Repository {
//     id: number;
//     name: string;
// }

// interface CarruselProps {
//     repos: Repository[];
// }

// const CarouselComponent = ({repos}: CarruselProps) => {

//   return (
//     <section className='seccionproj'>
//       {/* Centramos el encabezado utilizando estilos CSS */}
//       <h1 className='projct' style={{ textAlign: 'center' }}>Mis Proyectos</h1>
//       <Carousel>
//         {repos.map((repo) => (
//           <div key={repo.id}>
//             <div className='AlmacenContainer'>
//               {/* Utiliza estilos inline para hacer que el nombre del proyecto sea más grande */}
//               <a href={`https://github.com/TonyBarrantes/${repo.name}`} target="_blank" className='rLink' style={{ fontSize: '24px', fontWeight: 'bold' }}>{repo.name}</a>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// };

// *export default CarouselComponent;

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// interface Repository {
//     id: number;
//     name: string;
// }

// interface CarouselProps {
//     repos: Repository[];
// }

// const CarouselComponent = ({ repos }: CarouselProps) => {

//     return (
//         <section className='seccionproj'>
//             {/* Centramos el encabezado utilizando estilos CSS */}
//             <h1 className='projct' style={{ textAlign: 'center' }}>Mis Proyectos</h1>
//             <div className="carousel-container">
//                 <Carousel>
//                     {repos.map((repo) => (
//                         <div key={repo.id}>
//                             <div className='AlmacenContainer'>
//                                 {/* Utiliza estilos inline para hacer que el nombre del proyecto sea más grande */}
//                                 <a href={`https://github.com/TonyBarrantes/${repo.name}`} target="_blank" className='rLink' style={{ fontSize: '24px', fontWeight: 'bold' }}>{repo.name}</a>
//                             </div>
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>
//         </section>
//     );
// };

// export default CarouselComponent;

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Repository {
    id: number;
    name: string;
}

interface CarouselProps {
    repos: Repository[];
}

const CarouselComponent = ({ repos }: CarouselProps) => {

    return (
        <section className='seccionproj'>
            {/* Aumentamos el tamaño del título utilizando estilos CSS */}
            <h1 className='projct' style={{ textAlign: 'center', fontSize: '36px' }}>Mis Proyectos</h1>
            <div className="carousel-container">
                <Carousel>
                    {repos.map((repo) => (
                        <div key={repo.id}>
                            <div className='AlmacenContainer'>
                                {/* Reducimos un poco el tamaño del nombre del proyecto */}
                                <a href={`https://github.com/TonyBarrantes/${repo.name}`} target="_blank" className='rLink' style={{ fontSize: '20px', fontWeight: 'bold' }}>{repo.name}</a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default CarouselComponent;


