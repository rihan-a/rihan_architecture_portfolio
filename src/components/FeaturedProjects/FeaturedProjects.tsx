import React from "react";
import "./FeaturedProjects.css";
import coverImages from "../../coverImages.json";

function FeaturedProjects() {
    return (
        <section className="featured-projects-container">
            <div className="featured-projects-text">
                <h3>SELECTED WORKS 2010 / 2022</h3>
            </div>
            <div className="featured-projects-imgs">
                <img src="images/092_CAVALLINO_V3_P.jpg" alt="" />
            </div>
        </section>
    );
}

export default FeaturedProjects;
