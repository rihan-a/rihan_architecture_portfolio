import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Ai from "./components/Ai/Ai";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import About from "./components/About/About";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/project/:id" element={<Project />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/ai" element={<Ai />}></Route>
                    <Route path="/projects" element={<ProjectsPage />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
