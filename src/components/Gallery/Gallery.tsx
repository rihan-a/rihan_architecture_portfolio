import React from "react";
import "./Gallery.css";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from "../../projects.json";

import { projectInterface } from "../../projectInterface";

function Gallery() {
    return (
        <div className="gallery-container main-container">
            {projects.map((project: projectInterface) => {
                return (
                    <ProjectCard
                        key={project.id}
                        coverImg={project.images[0]}
                        title={project.title}
                    />
                );
            })}
        </div>
    );
}

export default Gallery;
