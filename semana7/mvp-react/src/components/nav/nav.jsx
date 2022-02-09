import "../nav/nav.scss"
import {
  Link
} from "react-router-dom";

export const Nav = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
          <Link to="/portafolio">Portafolio</Link>
          </li>
          <li>
          <Link to="/experiencia">Experiencia</Link>
          </li>
          <li>
          <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    );
  };