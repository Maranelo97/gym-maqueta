import { Link } from "react-scroll";

function Offer() {
  return (
    <div id="presentaion">
      <div className="pr-heading">
        <h1>
          UNA GRAN<span>DECISIÓN</span>
        </h1>
        <div className="pr-btns">
          <Link to="contact" className="pr-btn" smooth={true} duration={1200}>
            CONTACTO
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
