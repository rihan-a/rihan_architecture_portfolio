import React, { useEffect, useState } from "react";
import MouseIcon from "../MouseIcon/MouseIcon";
import "./Cover.css";
import projects from "../../projects.json";

function Cover() {
    const [coverUrl, setCoverUrl] = useState<string>("");

    useEffect(() => {
        let projectRandomNumber = Math.floor(Math.random() * 9);
        let imageRandomNumber = Math.floor(Math.random() * 3);

        const coverImageUrl =
            projects[projectRandomNumber].images[imageRandomNumber];
        setCoverUrl(coverImageUrl);
    }, []);

    return (
        <div className="cover-wrapper">
            <div
                className="cover"
                style={{
                    backgroundImage: `url("${coverUrl}")`,
                }}
            >
                <h1>PORTFOLIO</h1>
            </div>
            <div className="mouse-icon-row">
                <MouseIcon />
            </div>
        </div>
    );
}

export default Cover;
