import "../nav/nav.scss"
import {
  NavLink
} from "react-router-dom";

export const Nav = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/nosotros" activeClassName="selected">Nosotros</NavLink>
          </li>
          <li>
          <NavLink to="/portafolio" activeClassName="selected">Portafolio</NavLink>
          </li>
          <li>
          <NavLink to="/experiencia" activeClassName="selected">Experiencia</NavLink>
          </li>
          <li>
          <NavLink to="/contacto" activeClassName="selected">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    );
  };