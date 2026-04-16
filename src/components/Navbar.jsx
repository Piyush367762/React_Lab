import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" style={{ height: "40px" }}/>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/docs">Docs</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
export default Navbar;