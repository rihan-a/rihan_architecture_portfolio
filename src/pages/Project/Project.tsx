import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import projects from "../../projects.json";
import "./Project.css";
import { projectInterface } from "../../types";

function Project() {
    // extract project id from params
    const { id } = useParams();

    const [projectData, setProjectData] = useState<projectInterface>({
        id: null,
        title: "",
        desc: "",
        year: null,
        location: "",
        client: "",
        phase: "",
        programme: "",
        role: "",
        images: [],
        videos: [],
    });

    useEffect(() => {
        // filter projects list to get the selected project by id
        const projectData = projects.filter((project: projectInterface) => {
            return Number(id) === project.id;
        });
        // store project data
        setProjectData(projectData[0]);
    }, [id]);

    return (
        <>
            <ProjectDetails projectData={projectData} />

            {/* -----  Render project images ------ */}

            {projectData.images.map((imageUrl) => {
                return (
                    <img
                        className="project-img"
                        src={imageUrl}
                        alt={projectData.title}
                    />
                );
            })}

            {/* -----  Render project videos ------ */}

            {projectData.videos &&
                projectData.videos.map((videoUrl) => {
                    return (
                        <iframe
                            key={videoUrl}
                            className="project-video"
                            title="vimeo-player"
                            src={videoUrl}
                            allowFullScreen
                        ></iframe>
                    );
                })}
        </>
    );
}

export default Project;
