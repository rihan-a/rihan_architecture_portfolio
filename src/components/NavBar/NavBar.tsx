import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar() {
    const navigate = useNavigate();
    return (
        <nav className="nav-bar">
            <Link className="nav-bar-link" to="/projects">
                Projects
            </Link>

            <Link className="nav-bar-link ai" to="/genai">
                GenSpace Ai
            </Link>

            <div className="navbar-logo">
                <img
                    src="/images/LOGO-2-B.png"
                    alt="rihan-logo"
                    onClick={() => navigate("/")}
                />
            </div>

            <Link className="nav-bar-link" to="/ai">
                Ai-Experiments
            </Link>

            <Link className="nav-bar-link" to="/about">
                About
            </Link>
        </nav>
    );
}

export default NavBar;
