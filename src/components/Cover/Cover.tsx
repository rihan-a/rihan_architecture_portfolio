import React, { useEffect, useState } from "react";
import MouseIcon from "../MouseIcon/MouseIcon";
import NavBar from "../NavBar/NavBar";
import "./Cover.css";
import coverImages from "../../coverImages.json";

function Cover() {
    const [coverUrl, setCoverUrl] = useState<string>("");

    useEffect(() => {
        let imageRandomNumber = Math.floor(Math.random() * 11);
        const coverImageUrl = coverImages[0].coverImages[imageRandomNumber];

        setCoverUrl(coverImageUrl);
    }, []);

    return (
        <>
            <NavBar />
            <main className="cover-wrapper">
                <div
                    className="cover"
                    style={{
                        backgroundImage: `url("${coverUrl}")`,
                    }}
                >
                    {/* <h1>PORTFOLIO</h1> */}
                    <img
                        className="cover-rihan-logo"
                        src="/images/LOGO-2-W.png"
                        alt="rihan logo"
                    />
                </div>
                {/* <div className="mouse-icon-row">
                    <MouseIcon />
                </div> */}
            </main>
        </>
    );
}

export default Cover;
