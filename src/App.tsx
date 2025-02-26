import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Ai from "./pages/Ai/Ai";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import About from "./pages/About/About";
import GenAi from "./pages/GenAi/GenAi";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

const Layout = () => (
    <>
        <NavBar />
        <Outlet />
    </>
);

function App() {
    return (
        <>
            <div>
                <SpeedInsights />
            </div>

            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/project/:id" element={<Project />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/ai" element={<Ai />} />
                        <Route path="/genai" element={<GenAi />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
