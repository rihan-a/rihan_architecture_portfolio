import React from "react";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <HomePage />
            <BrowserRouter>
                <Routes>
                    <Route path="/project" element={<ProjectPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
