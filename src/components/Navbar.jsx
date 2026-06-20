import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
    return (
        <header className="navbar">
            <div className="logo-section">
                <img src={logo} alt="AJ Hotel Logo" className="logo" />
                <h2>AR Hotel</h2>
            </div>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/hotels">Hotels</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </header>
    );
}

export default Navbar;