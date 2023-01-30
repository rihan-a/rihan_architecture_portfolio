import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Home />
            <BrowserRouter>
                <Routes>
                    <Route path="/project" element={<Project />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
