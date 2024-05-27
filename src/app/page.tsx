"use client";

// import React from 'react';
// import AboutMe from './about/page';
// import Services from './components/services';
// import CarouselComponent from './components/carrusel';
// import { useEffect, useState } from 'react';
// import Footer from './components/footer';
// import CallToAction from './components/call';
// import Presentacion from './components/presentation';

// type Repository = {
//   id: number;
//   name: string;
//   owner: {
//     avatar_url: string;
//   }
// }

// async function getData(username: string): Promise<Repository[]> {
//   const res = await fetch(`https://api.github.com/users/${username}/repos`);
//   const data: Repository[] = await res.json();
//   return data;
// }

// export default function Home() {
//   const [repos, setRepos] = useState<Repository[]>([]);
//   const [, setAvatar] = useState<string>('');
//   useEffect(() => {
//     const fetchdata = async () => {
//       const dataAc = await getData('TonyBarrantes');
//       setAvatar(dataAc[0]?.owner?.avatar_url ?? '');
//       setRepos(dataAc);
//     };
//     fetchdata();

//   }, []); 

//   return (
//     <div>
//       <section id='Presentation'><Presentacion/></section>
//       <section id='AboutMe'><AboutMe/></section>
//       <section id='Services'><Services/></section>
//       <section id='projects'><CarouselComponent repos={repos} /></section>
//       <section id='Call'><CallToAction/></section>
//       <section id='Footer'><Footer/></section>
//     </div>
//   );
// }

// import React from 'react';
// import AboutMe from './about/page';
// import Services from './components/services';
// import CarouselComponent from './components/carrusel';
// import { useEffect, useState } from 'react';
// import Footer from './components/footer';
// import CallToAction from './components/call';
// import Presentacion from './components/presentation';

// type Repository = {
//   id: number;
//   name: string;
//   owner: {
//     avatar_url: string;
//   }
// }

// async function getData(username: string): Promise<Repository[]> {
//   const res = await fetch(`https://api.github.com/users/${username}/repos`);
//   const data: Repository[] = await res.json();
//   return data;
// }

// export default function Home() {
//   const [repos, setRepos] = useState<Repository[]>([]);
//   const [, setAvatar] = useState<string>('');
//   useEffect(() => {
//     const fetchData = async () => {
//       const dataAc = await getData('TonyBarrantes');
//       setAvatar(dataAc[0]?.owner?.avatar_url ?? '');
//       setRepos(dataAc);
//     };
//     fetchData();

//   }, []); 

//   return (
//     <div>
//       <section id='Presentation'><Presentacion/></section>
//       <hr />
//       <section id='AboutMe'><AboutMe/></section>
//       <hr />
//       <section id='Services'><Services/></section>
//       <hr />
//       <section id='projects'><CarouselComponent repos={repos} /></section>
//       <hr />
//       <section id='Call'><CallToAction/></section>
//       <section id='Footer'><Footer/></section>
//     </div>
//   );
// }

import React from 'react';
import AboutMe from './about/page';
import Services from './components/services';
import CarouselComponent from './components/carrusel';
import { useEffect, useState } from 'react';
import Footer from './components/footer';
import CallToAction from './components/call';
import Presentacion from './components/presentation';

type Repository = {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
  }
}

async function getData(username: string): Promise<Repository[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data: Repository[] = await res.json();
  return data;
}

export default function Home() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [, setAvatar] = useState<string>('');
  useEffect(() => {
    const fetchData = async () => {
      const dataAc = await getData('TonyBarrantes');
      setAvatar(dataAc[0]?.owner?.avatar_url ?? '');
      setRepos(dataAc);
    };
    fetchData();

  }, []); 

  return (
    <div>
      <section id='Presentation' className='center-v'><div className='section-wrapper'><Presentacion/></div></section>
      <hr />
      <section id='AboutMe' className='center-v'><div className='section-wrapper'><AboutMe/></div></section>
      <hr />
      <section id='Services' className='center-v'><div className='section-wrapper'><Services/></div></section>
      <hr />
      <section id='projects' className='center-v'><div className='section-wrapper'><CarouselComponent repos={repos} /></div></section>
      <hr />
      <section id='Call' className='center-v'><div className='section-wrapper'><CallToAction/></div></section>
      <hr />
      <section id='Footer'><Footer/></section>
    </div>
  );
}
