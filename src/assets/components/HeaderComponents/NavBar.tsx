import { NavLink } from "react-router-dom";
import '../../styles/header.css';
import iconJPG from '../../images/icono.png';
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const NavBar = () => {

  const { width } = useWindowDimensions();

  return (
    <>
    <header>
        <ul>
          <li><a href='tel:+507659661547'>+50765961547</a></li>
          <li><a href="mailto:jhosmita9@gmail.com">jhosmita9@gmail.com</a></li>
        </ul>
    </header>
    <nav>
        <picture>
          <img loading="lazy" src={iconJPG} alt="Logo de Web Makers" title="Logo de Web Makers" width={100} height={100} />
        </picture>
        {
          width > 575 ? (
            <ul>
                <li><NavLink to={'/'}>Inicio</NavLink></li>
                <li><NavLink to={'/about'}>Sobre nosotros</NavLink></li>
                <li><NavLink to={'/portfolio'}>Portfolio</NavLink></li>
                <li><NavLink to={'/contact'}>Contactos</NavLink></li>
            </ul>
          ) : (
            null
          )
        }
    </nav>
    </>
  )
}
