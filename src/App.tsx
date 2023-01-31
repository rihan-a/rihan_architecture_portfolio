import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/project/:id" element={<Project />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
