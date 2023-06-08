import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../static/mainLogo.png";

function Header() {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<img src={Logo} alt="Troubleshooter" />
			</div>
			<div className="navbar-links">
				<Link to="/blogs">BLOGS</Link>

				<Link to="/account">ACCOUNT</Link>

				<Link to="/contact">CONTACT US</Link>
			</div>
			<div className="buttons">
				<Link className="signup-button" to="/login">LOGIN</Link>

				<Link className="signup-button" to="/signup">SIGN UP</Link>
			</div>
		</nav>
	);
}

export default Header;
