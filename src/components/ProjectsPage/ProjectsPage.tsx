import React from "react";
import NavBar from "../NavBar/NavBar";
import Gallery from "../Gallery/Gallery";
import "./ProjectsPage.css";

export default function ProjectsPage() {
    return (
        <>
            <section className="projects-page-main-title">
                <h2>selected design projects 2010 -2022</h2>
            </section>
            <NavBar />
            <Gallery />
        </>
    );
}
