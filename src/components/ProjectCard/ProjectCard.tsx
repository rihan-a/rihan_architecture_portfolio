// PROJECT CARD
// Component to render project img and title as a card in Project Gallery

import React from "react";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";

// Props types interface
interface IProps {
    coverImg: string;
    title: string;
    id: number;
}

function ProjectCard({ coverImg, title, id }: IProps) {
    const navigate = useNavigate();

    // function to open clicked project page
    const openProject = () => {
        navigate(`/project/${id}`);
    };

    return (
        <div className="project-card-container" onClick={openProject}>
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
