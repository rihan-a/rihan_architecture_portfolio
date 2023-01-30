import React from "react";
import "./ProjectDetails.css";

function ProjectDetails() {
    return (
        <section className="project-wrapper main-container">
            <div className="project-text-wrapper">
                <div className="project-name">
                    <h3>Project Name</h3>
                </div>

                <div className="project-desc">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe dolore incidunt, sed sequi placeat eaque unde! Sit
                        fugiat vitae rem nemo praesentium iure quas quasi eum, a
                        saepe, adipisci voluptatibus. Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Nam quod libero
                        quaerat quibusdam perferendis accusamus blanditiis
                        quisquam sint autem. Officia necessitatibus dignissimos
                        amet numquam repudiandae error sapiente magni odio sint.
                    </p>
                </div>

                <div className="project-facts-wrapper">
                    <div className="project-fact">
                        <p className="fact">YEAR</p>
                        <p className="value">2022</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">CLIENT</p>
                        <p className="value">LAVA</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">PROJECT</p>
                        <p className="value">ARCHITECTURE</p>
                    </div>
                    <div className="project-fact">
                        <p className="fact">ROLE</p>
                        <p className="value">DESIGNER</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;
