// PROJECT DETAILS
// Component to render all project details

import React from "react";
import "./ProjectDetails.css";

interface IProps {
    projectData: {
        id: number | null;
        title: string;
        desc: string;
        year: number | null;
        location: string;
        client: string;
        type: string;
        role: string;
        images: string[];
    };
}

function ProjectDetails({ projectData }: IProps) {
    return (
        <section className="project-wrapper">
            <div className="project-text-wrapper main-container">
                <div className="project-name">
                    <h3>{projectData.title}</h3>
                </div>

                <div className="project-desc">
                    <p>{projectData.desc}</p>
                </div>

                <div className="project-facts-wrapper">
                    <div className="project-fact">
                        <p className="fact">YEAR</p>
                        <p className="value">{projectData.year}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">LOCATION</p>
                        <p className="value">{projectData.location}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">CLIENT</p>
                        <p className="value">{projectData.client}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">PROJECT</p>
                        <p className="value">{projectData.type}</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">ROLE</p>
                        <p className="value">{projectData.role}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;
