import Link from 'next/link';

export default function Navigation() {
    return (
        <div className="navegacion d-flex bg-dark">
            <div className="nav col-lg-10">
                <nav>
                    <Link href="#Presentation"> Home </Link>
                    <Link href="#AboutMe"> Acerca de mí </Link>
                    <Link href="#Services"> Habilidades </Link>
                    <Link href="#projects"> Proyectos </Link>
                    <Link href="#Call"> Contáctame </Link>
                </nav>
            </div>
            <hr className="horizontal-line" /> 
        </div>
    )
}
