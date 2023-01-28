import React from "react";
import "./ProjectCard.css";

interface IProps {
    key: number;
    coverImg: string;
    title: string;
}

function ProjectCard(props: IProps) {
    return (
        <div className="project-card-container">
            <div className="project-card-img">
                <img src={props.coverImg} alt="" />
            </div>
            <div className="project-title">
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}

export default ProjectCard;
