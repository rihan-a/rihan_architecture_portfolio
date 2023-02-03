import React, { useEffect, useState } from "react";
import MouseIcon from "../MouseIcon/MouseIcon";
import NavBar from "../NavBar/NavBar";
import "./Cover.css";
import coverImages from "../../coverImages.json";

function Cover() {
    const [coverUrl, setCoverUrl] = useState<string>("");

    useEffect(() => {
        let imageRandomNumber = Math.floor(Math.random() * 17);
        const coverImageUrl = coverImages[0].coverImages[imageRandomNumber];

        setCoverUrl(coverImageUrl);
    }, []);

    return (
        <>
            <NavBar />
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
        </>
    );
}

export default Cover;
