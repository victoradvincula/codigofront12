import {
  NavLink
} from "react-router-dom";
import { Nav } from "../nav/nav";
import "../header/header.scss"

export const Header = () => {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/">MARCAS ADV</NavLink>
      <Nav />
    </header>
  );
};
