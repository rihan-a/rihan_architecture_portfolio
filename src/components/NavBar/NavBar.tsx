import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
            <Link className="nav-bar-link" to="/">
                HOME
            </Link>
            <div className="navbar-logo">
                <img src="/images/LOGO.png" alt="rihan-logo" />
            </div>
            <Link className="nav-bar-link" to="/contact">
                CONTACT
            </Link>
        </div>
    );
}

export default NavBar;
