import {Link} from "react-router-dom";

function Navbar(){
    return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/docs">Documentation</Link>
        <Link to="/about">About Us</Link>
    </nav>
    );
}
export default Navbar;