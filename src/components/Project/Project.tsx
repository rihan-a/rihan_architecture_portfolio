import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import projects from "../../projects.json";
import "./Project.css";

// project data types interface
interface projectType {
    id: number | null;
    title: string;
    desc: string;
    year: number | null;
    location: string;
    client: string;
    type: string;
    role: string;
    images: string[];
}

function Project() {
    // extract project id from params
    const { id } = useParams();

    const [projectData, setProjectData] = useState<projectType>({
        id: null,
        title: "",
        desc: "",
        year: null,
        location: "",
        client: "",
        type: "",
        role: "",
        images: [],
    });

    useEffect(() => {
        // filter projects list to get the selected project by id
        const projectData = projects.filter((project: projectType) => {
            return Number(id) === project.id;
        });
        // store project data
        setProjectData(projectData[0]);
    }, [id]);

    return (
        <>
            <ProjectDetails projectData={projectData} />
            {projectData.images.map((imageUrl) => {
                return (
                    <img
                        className="project-img"
                        src={imageUrl}
                        alt={projectData.title}
                    />
                );
            })}
        </>
    );
}

export default Project;
