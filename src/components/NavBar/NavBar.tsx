import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar() {
    const navigate = useNavigate();
    return (
        <nav className="nav-bar">
            <Link className="nav-bar-link" to="/">
                HOME
            </Link>
            {/* <Link className="nav-bar-link" to="/">
                SERVICES
            </Link> */}
            <div className="navbar-logo">
                <img
                    src="/images/LOGO-B.png"
                    alt="rihan-logo"
                    onClick={() => navigate("/")}
                />
            </div>
            {/* <Link className="nav-bar-link" to="/">
                ABOUT ME
            </Link> */}
            <Link className="nav-bar-link" to="/contact">
                CONTACT
            </Link>
        </nav>
    );
}

export default NavBar;
