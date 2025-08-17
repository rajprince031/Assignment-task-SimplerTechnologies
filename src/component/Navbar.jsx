import { useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import { Link } from "react-scroll";
import { useRef } from "react";
const Navbar = () => {
  const navigate = useNavigate()

  const checkboxRef = useRef(null);

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__logo" onClick={() => { navigate("/"); closeMenu(); }}>
       <p>Navbar</p>
      </div>

      <input type="checkbox"  id="navbar-toggle" ref={checkboxRef}/>
      <label htmlFor="navbar-toggle" className="navbar__toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul className="navbar__menu" onClick={closeMenu}>
        <li>
          <Link to="home" smooth={true} duration={500} className="navbar__link" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="navbar__link" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="navbar__link" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;