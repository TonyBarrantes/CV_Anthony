// "use client";

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
//             <h1 className='projct' style={{ textAlign: 'center', fontSize: '36px' }}>Mis Proyectos</h1>
//             <div className="carousel-container">
//                 <Carousel>
//                     {repos.map((repo) => (
//                         <div key={repo.id}>
//                             <div className='AlmacenContainer'>
//                                 <a href={`https://github.com/TonyBarrantes/${repo.name}`} target="_blank" className='rLink' style={{ fontSize: '20px', fontWeight: 'bold' }}>{repo.name}</a>
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
            <h1 className='projct' style={{ textAlign: 'center', fontSize: '36px' }}>Mis Proyectos</h1>
            <div className="carousel-container">
                <Carousel showIndicators={false} showThumbs={false}>
                    {repos.map((repo) => (
                        <div key={repo.id}>
                            <div className='AlmacenContainer'>
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
