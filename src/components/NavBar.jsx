import { useState } from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration={1200}>
            Presentacion
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1200}>
            Beneficios
          </Link>
        </li>
        <li>
          <Link to="presentaion" smooth={true} duration={1200}>
            Oferta
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1200}>
            Sobre mi
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1200}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
