// PROJECT CARD
// Component to render project img and title as a card in Project Gallery

import React from "react";
import "./ProjectCard.css";

interface IProps {
    key: number;
    coverImg: string;
    title: string;
}

function ProjectCard({ coverImg, title }: IProps) {
    return (
        <div className="project-card-container">
            <div className="project-card-img">
                <img src={coverImg} alt="" />
            </div>
            <div className="project-title">
                <h4>{title}</h4>
            </div>
        </div>
    );
}

export default ProjectCard;
