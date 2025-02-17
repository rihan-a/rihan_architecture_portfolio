import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
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
                {menuOpen ? <FiX /> : <FiMenu />}
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
                        isActive ? "nav-bar-link ai active" : "nav-bar-link ai"
                    }
                    to="https://imagine-ai-app.vercel.app"
                    onClick={() => setMenuOpen(false)}
                >
                    GenSpace Ai - Beta
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "nav-bar-link  active" : "nav-bar-link"
                    }
                    to="/genai"
                    onClick={() => setMenuOpen(false)}
                >
                    GenSpace Ai Gallery
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
