import React, { useEffect, useState } from "react";
import "./FeaturedProjects.css";
import coverImages from "../../coverImages.json";

function FeaturedProjects() {
    const [projectUrl, setProjectUrl] = useState<string>("");

    useEffect(() => {
        let imageRandomNumber = Math.floor(Math.random() * 17);
        const projectImageUrl = coverImages[0].coverImages[imageRandomNumber];

        setProjectUrl(projectImageUrl);
    }, []);

    return (
        <section className="featured-projects-container">
            <div className="featured-projects-text">
                <h3>SELECTED WORKS 2010 / 2022</h3>
            </div>
            <div className="featured-projects-imgs">
                <img src={projectUrl} alt="" />
            </div>
        </section>
    );
}

export default FeaturedProjects;
