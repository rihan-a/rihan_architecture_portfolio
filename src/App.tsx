import React from "react";
import "./App.css";
import Cover from "./components/Cover/Cover";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import Gallery from "./components/Gallery/Gallery";

function App() {
    return (
        <>
            <Cover />
            <FeaturedProjects />
            <Gallery />
        </>
    );
}

export default App;
