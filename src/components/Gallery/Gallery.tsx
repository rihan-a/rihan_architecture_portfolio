import React, { useState } from "react";
import "./Gallery.css";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from "../../projects.json";
import { projectTypes } from "./projectTypes";

interface projectCard {
    id: number;
    title: string;
    images: string[];
}

function Gallery() {
    const [projectFilter, setProjectFilter] = useState<string>("All");

    const filterProjects = (e: React.MouseEvent<HTMLElement>) => {
        setProjectFilter(e.currentTarget.innerHTML);
    };

    return (
        <>
            <div className="projects-programme">
                {projectTypes.map((type: string) => {
                    return (
                        <h4
                            className={
                                projectFilter === type
                                    ? "programme-txt active"
                                    : "programme-txt"
                            }
                            key={type}
                            onClick={filterProjects}
                        >
                            {type}
                        </h4>
                    );
                })}
            </div>
            <div className="gallery-container">
                {projects
                    .sort((a, b) => 0.5 - Math.random())
                    .filter((project) => {
                        if (projectFilter === "All") {
                            return project.programme;
                        }
                        return project.programme === projectFilter;
                    })
                    .map((project: projectCard) => {
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
        </>
    );
}

export default Gallery;
