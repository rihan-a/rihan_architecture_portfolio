import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

function NavBar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="nav-bar">
            <div className="navbar-logo">
                <img
                    src="/images/LOGO-2-B.png"
                    alt="rihan-logo"
                    onClick={() => navigate("/")}
                />
            </div>

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? (
                    <span className="material-symbols-outlined">close</span>
                ) : (
                    <span className="material-symbols-outlined">menu</span>
                )}
            </div>

            <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-bar-link active" : "nav-bar-link"
                    }
                    to="/projects"
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-bar-link  active" : "nav-bar-link ai"
                    }
                    to="/genai"
                    onClick={() => setMenuOpen(false)}
                >
                    GenSpace Ai
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-bar-link active" : "nav-bar-link"
                    }
                    to="/ai"
                    onClick={() => setMenuOpen(false)}
                >
                    Ai-Experiments
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-bar-link active" : "nav-bar-link"
                    }
                    to="/about"
                    onClick={() => setMenuOpen(false)}
                >
                    About
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;
