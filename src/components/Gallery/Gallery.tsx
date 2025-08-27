import React, { useState, useEffect, useMemo } from "react";
import "./Gallery.css";
import ProjectCard from "../ProjectCard/ProjectCard";

import projects from "../../projects.json";
import { projectTypes } from "./projectTypes";

interface projectCard {
    id: number;
    title: string;
    desc: string;
    year: number;
    location: string;
    client: string;
    phase: string;
    role: string;
    programme: string;
    images: string[];
}

function Gallery() {
    const [projectFilter, setProjectFilter] = useState<string>("All");
    const [shuffledProjects, setShuffledProjects] = useState<projectCard[]>([]);

    // Shuffle projects only once on component mount
    useEffect(() => {
        const shuffled = [...projects].sort(() => 0.5 - Math.random());
        setShuffledProjects(shuffled);
    }, []);

    // Memoize filtered projects to prevent unnecessary recalculations
    const filteredProjects = useMemo(() => {
        if (projectFilter === "All") {
            return shuffledProjects;
        }
        return shuffledProjects.filter((project) => project.programme === projectFilter);
    }, [shuffledProjects, projectFilter]);

    const filterProjects = (e: React.MouseEvent<HTMLElement>) => {
        setProjectFilter(e.currentTarget.innerHTML);
    };

    return (
        <>
            <section className="projects-programme">
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
            </section>
            <section className="gallery-container">
                {filteredProjects.map((project: projectCard) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            coverImg={project.images[0]}
                            title={project.title}
                            id={project.id}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default Gallery;
