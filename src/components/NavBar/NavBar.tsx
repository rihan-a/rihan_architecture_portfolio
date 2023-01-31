import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="nav-bar">
            <Link className="nav-bar-link" to="/">
                HOME
            </Link>
            <img src="/images/LOGO.png" alt="rihan-logo" />
            <Link className="nav-bar-link" to="/">
                CONTACT
            </Link>
        </div>
    );
}

export default NavBar;
