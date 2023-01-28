import React from "react";
import "./ProjectCard.css";

function ProjectCard() {
    return (
        <div className="project-card-container">
            <div className="project-card-img">
                <img src="/images/ATHORA_MUNICH_V1.jpg" alt="" />
            </div>
            <div className="project-title">
                <h4>Project Name</h4>
            </div>
        </div>
    );
}

export default ProjectCard;
