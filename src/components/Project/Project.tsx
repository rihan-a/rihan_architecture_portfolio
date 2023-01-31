import React, { useEffect, useState } from "react";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { useSelector } from "react-redux";

import projects from "../../projects.json";

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
    const projectId: number = useSelector((state: any) => {
        return state.project.projectId;
    });

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
        const projectData = projects.filter((project: projectType) => {
            return projectId === project.id;
        });
        setProjectData(projectData[0]);
    }, [projectId]);

    return <ProjectDetails projectData={projectData} />;
}

export default Project;
