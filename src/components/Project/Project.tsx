import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import projects from "../../projects.json";
import "./Project.css";
import { projectInterface } from "../../projectInterface";

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
            <NavBar />
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

            {projectData.videos && (
                <iframe
                    className="project-video"
                    title="vimeo-player"
                    src={projectData.videos[0]}
                    allowFullScreen
                ></iframe>
            )}
        </>
    );
}

export default Project;
