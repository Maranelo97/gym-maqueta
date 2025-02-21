import { Link } from "react-scroll";
function Header() {
  return (
    <div id="main">
      <div className="name">
        <h2>ENTRENA</h2>
        <h1>
          <span>CONMIGO</span>
        </h1>
        <p className="details">CONSTRUI TU CUERPO CONMIGO Y LLEGA AL VERANO</p>
        <div className="header-btns">
            <Link to="contact" className="header-btn" smooth={true} duration={1200}>UNITE</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
