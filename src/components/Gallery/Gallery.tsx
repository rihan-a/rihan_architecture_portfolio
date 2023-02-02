import React from "react";
import "./Gallery.css";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from "../../projects.json";

import { projectInterface } from "../../projectInterface";

function Gallery() {
    return (
        <div className="gallery-container main-container">
            {projects
                .sort((a, b) => 0.5 - Math.random())
                .map((project: projectInterface) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            coverImg={project.images[0]}
                            title={project.title}
                            id={project.id}
                        />
                    );
                })}
        </div>
    );
}

export default Gallery;
