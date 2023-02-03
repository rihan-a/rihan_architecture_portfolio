import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="nav-bar">
            <Link className="nav-bar-link" to="/">
                HOME
            </Link>
            <div className="navbar-logo">
                <img
                    src="/images/LOGO.png"
                    alt="rihan-logo"
                    onClick={() => navigate("/")}
                />
            </div>
            <Link className="nav-bar-link" to="/contact">
                CONTACT
            </Link>
        </div>
    );
}

export default NavBar;
