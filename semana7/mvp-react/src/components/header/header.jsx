import { Nav } from "../nav/nav";
import "../header/header.scss"

export const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="#">DESTINOS DEL MUNDO</a>
      <Nav />
    </header>
  );
};
